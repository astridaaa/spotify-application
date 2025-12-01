package util;

public enum Keys {
    CLIENT_ID("e4415f5ec483493d80d40b7b17fffa72"), CLIENT_SECRET("024972559b89437a96bcc284449ebf30");

    public final String label;

    private Keys(String label) {
        this.label = label;
    }

    public String getKey() {
        return this.label;
    }
}
