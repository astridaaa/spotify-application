package controller;

import java.io.IOException;

import org.apache.hc.core5.http.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.specification.Paging;
import se.michaelthelin.spotify.model_objects.specification.Track;
import se.michaelthelin.spotify.requests.data.personalization.simplified.GetUsersTopTracksRequest;

// https://github.com/spotify-web-api-java/spotify-web-api-java?tab=readme-ov-file library dokumentacija yeahhhhh

@Controller
@RequestMapping("api/tracks")
public class TrackController {
        private final static SpotifyApi spotifyApi = new SpotifyApi.Builder()
                        .setAccessToken("taHZ2SdB-bPA3FsK3D7ZN5npZS47cMy-IEySVEGttOhXmqaVAIo0ESvTCLjLBifhHOHOIuhFUKPW1WMDP7w6dj3MAZdWT8CLI2MkZaXbYLTeoDvXesf2eeiLYPBGdx8tIwQJKgV8XdnzH_DONk")
                        .build();

        final static GetUsersTopTracksRequest getUsersTopTracksRequest = spotifyApi.getUsersTopTracks()
                        .build();

        @GetMapping("/top-20")
        public static void getUsersTopTracks_Sync() {
                try {
                        final Paging<Track> trackPaging = getUsersTopTracksRequest.execute();

                        System.out.println("Total: " + trackPaging.getTotal());
                } catch (IOException | SpotifyWebApiException | ParseException e) {
                        System.out.println("Error: " + e.getMessage());
                }
        }

}
