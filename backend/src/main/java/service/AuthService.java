package service;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.URI;
import java.util.concurrent.CompletableFuture;

import java.awt.Desktop;

import org.apache.hc.core5.http.ParseException;
import com.sun.net.httpserver.HttpServer;
import org.springframework.web.bind.annotation.GetMapping;

import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.SpotifyHttpManager;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.credentials.AuthorizationCodeCredentials;
import se.michaelthelin.spotify.requests.authorization.authorization_code.AuthorizationCodeRequest;
import se.michaelthelin.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest;

public class AuthService {
    private static final URI redirectUri = SpotifyHttpManager.makeUri("http://127.0.0.1:3000");
    private static final String code = "AQCnscTDC6HFjJQwnAsiAg3zfLBS37Mshjds19CbCQ22TJTIh8-ehxzWJBEPk2fBZIC8N7jtZDirC0goEjxtbxZ1K1MZCMsJtY7nt4ProN186Ta8scYT18UaIcjuCZ9kfBwiRRLnxjqoOOb1MNw6aHhds1Y07EGODCZl3dbc-QDNaw3wfFbxr2BXg";

    public static String authorizationCodeUri_Sync(String clientId, String clientSecret) {
        SpotifyApi spotifyApi = new SpotifyApi.Builder()
                .setClientId(clientId)
                .setClientSecret(clientSecret)
                .setRedirectUri(redirectUri)
                .build();

        AuthorizationCodeUriRequest authorizationCodeUriRequest = spotifyApi.authorizationCodeUri()
                .scope("user-top-read")
                .build();

        final URI uri = authorizationCodeUriRequest.execute();

        String code = null;
        try {
            code = getAuthorizationCode(uri.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }

        AuthorizationCodeRequest authorizationCodeRequest = spotifyApi.authorizationCode(code)
                .build();

        AuthorizationCodeCredentials authorizationCodeCredentials = null;
        try {
            authorizationCodeCredentials = authorizationCodeRequest.execute();
        } catch (ParseException | SpotifyWebApiException | IOException e) {
            e.printStackTrace();
        }

        spotifyApi.setAccessToken(authorizationCodeCredentials.getAccessToken());
        spotifyApi.setRefreshToken(authorizationCodeCredentials.getRefreshToken());

        System.out.println(authorizationCodeCredentials.getAccessToken());
        System.out.println("Expires in: " + authorizationCodeCredentials.getExpiresIn());

        return authorizationCodeCredentials.getAccessToken();
    }

    // funkcija padaryta su diabolical levels of vibecoding but it is what it is
    public static String getAuthorizationCode(String authUri) throws Exception {

        // Step 2: Set up local server to capture callback
        CompletableFuture<String> codeFuture = new CompletableFuture<>();
        HttpServer server = HttpServer.create(new InetSocketAddress(5007), 0);

        server.createContext("/", exchange -> {
            String query = exchange.getRequestURI().getQuery();
            String code = extractCodeFromQuery(query);

            if (code != null) {
                // Send success response to browser
                String response = "<html><body><h1>Authorization Successful!</h1><p>You can close this window.</p></body></html>";
                exchange.sendResponseHeaders(200, response.length());
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();

                // Complete the future with the code
                codeFuture.complete(code);
            } else {
                String response = "<html><body><h1>Authorization Failed</h1><p>No code received.</p></body></html>";
                exchange.sendResponseHeaders(400, response.length());
                OutputStream os = exchange.getResponseBody();
                os.write(response.getBytes());
                os.close();

                codeFuture.completeExceptionally(new Exception("No authorization code received"));
            }
        });

        server.start();
        System.out.println("Local server started on port 3000");

        // Step 3: Open browser to authorization URL
        if (Desktop.isDesktopSupported()) {
            Desktop.getDesktop().browse(new URI(authUri));
            System.out.println("Opening browser for authorization...");
        } else {
            System.out.println("Please open this URL in your browser:");
            System.out.println(authUri);
        }

        // Step 4: Wait for callback (with timeout)
        try {
            String code = codeFuture.get(); // This blocks until code is received
            return code;
        } finally {
            server.stop(0);
            System.out.println("Local server stopped");
        }
    }

    private static String extractCodeFromQuery(String query) {
        if (query == null)
            return null;

        String[] params = query.split("&");
        for (String param : params) {
            String[] keyValue = param.split("=");
            if (keyValue.length == 2 && keyValue[0].equals("code")) {
                return keyValue[1];
            }
        }
        return null;
    }
}
