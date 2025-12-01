package com.example.Spotify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "com.example.Spotify", "controller", "util" })
public class SpotifyApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpotifyApplication.class, args);
	}

}
