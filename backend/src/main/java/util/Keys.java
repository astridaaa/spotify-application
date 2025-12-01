package controller;

public enum Keys {
    CLIENT_ID("lol"), CLIENT_SECRET("");

    public final String label;

    private Keys(String label) {
        this.label = label;
    }

    public String getKey() {
        return this.label;
    }
}
