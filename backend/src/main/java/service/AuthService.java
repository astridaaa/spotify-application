package service;

import java.io.IOException;
import java.net.URI;

import org.apache.hc.core5.http.ParseException;
import org.springframework.web.bind.annotation.GetMapping;

import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.SpotifyHttpManager;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.credentials.AuthorizationCodeCredentials;
import se.michaelthelin.spotify.requests.authorization.authorization_code.AuthorizationCodeRequest;
import se.michaelthelin.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest;

public class AuthService {

    private static final String clientId = "e4415f5ec483493d80d40b7b17fffa72";
    private static final String clientSecret = "024972559b89437a96bcc284449ebf30";
    private static final URI redirectUri = SpotifyHttpManager.makeUri("http://127.0.0.1:3000");
    private static final String code = "AQCnscTDC6HFjJQwnAsiAg3zfLBS37Mks19CbCQ22TJTIh8-ehxzWJBEPk2fBZIC8N7jtZDirC0goEjxtbxZ1K1MZCMsJtY7nt4ProN186Ta8scYT18UaIcjuCZ9kfBwiRRLnxjqoOOb1MNw6aHhds1Y07EGODCZl3dbc-QDNaw3wfFbxr2BXg";

    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setClientId(clientId)
            .setClientSecret(clientSecret)
            .setRedirectUri(redirectUri)
            .build();

    private static final AuthorizationCodeUriRequest authorizationCodeUriRequest = spotifyApi.authorizationCodeUri()
            .scope("user-top-read")
            .build();

    private static final AuthorizationCodeRequest authorizationCodeRequest = spotifyApi.authorizationCode(code)
            .build();

    public static String authorizationCodeUri_Sync() {
        final URI uri = authorizationCodeUriRequest.execute();

        return uri.toString();
    }

    @GetMapping("/auth-code")
    public static void authorizationCode_Sync() {
        try {
            final AuthorizationCodeCredentials authorizationCodeCredentials = authorizationCodeRequest.execute();

            spotifyApi.setAccessToken(authorizationCodeCredentials.getAccessToken());
            spotifyApi.setRefreshToken(authorizationCodeCredentials.getRefreshToken());

            System.out.println(authorizationCodeCredentials.getAccessToken());
            System.out.println("Expires in: " + authorizationCodeCredentials.getExpiresIn());
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
