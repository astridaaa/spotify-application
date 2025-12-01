package util;

public enum Keys {
    CLIENT_ID("meow"), CLIENT_SECRET("meow");

    public final String label;

    private Keys(String label) {
        this.label = label;
    }

    public String getKey() {
        return this.label;
    }
}
