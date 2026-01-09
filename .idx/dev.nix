{ pkgs, ... }: {
  # The Nix channel to use.
  channel = "stable-24.05";

  # The packages to install in the environment.
  packages = [
    pkgs.nodejs_20,
    pkgs.npm
  ];

  # IDX configuration
  idx = {
    # The VS Code extensions to install.
    extensions = [
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode"
    ];

    # Command to run on environment startup.
    bootstrap = "npm ci";

    # The previews to run.
    previews = {
      web = {
        command = "npm run start -- --port $PORT --host 0.0.0.0";
        manager = "web";
      };
    };
  };
}
