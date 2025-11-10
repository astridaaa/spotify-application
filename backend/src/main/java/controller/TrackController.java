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
                        .setAccessToken("BQBINNmD_7mhE7tEs3p2lq2PYCei2-ApbIPk23DCrY6GpLOxBeJCQ6huzCsdEypIH9Alz6zX61cB-hO6nCQccliKvMd9Ryjfpi2K9iMP8KKHS5C8H2obbwGA7sf4qsuwXq1Z5TJJjROjbMqs0s2IVi_STy_4-mhrxTmXv08dzVbgd1Yz_y9qti9WPwA6RYgNO8f87sEQQWkj_A1gNxjPZi9Mek4JOFs9joRQn8RAJ6cM1ub3fSWfxJjFt9z_Bg")
                        .build();

        final static GetUsersTopTracksRequest getUsersTopTracksRequest = spotifyApi.getUsersTopTracks()
                        .limit(10)
                        .time_range("medium_term")
                        .build();

        @GetMapping("/top-20")
        public static void getUsersTopTracks_Sync() {
                try {
                        final Paging<Track> trackPaging = getUsersTopTracksRequest.execute();

                        System.out.println(trackPaging);
                } catch (IOException | SpotifyWebApiException | ParseException e) {
                        System.out.println("Error: " + e.getMessage());
                }
        }

}
