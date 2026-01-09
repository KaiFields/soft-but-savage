{ pkgs, ... }: {
  # The Nix channel to use.
  channel = "stable-24.05";

  # The packages to install in the environment.
  packages = [
    pkgs.nodejs_20,
    pkgs.nodePackages.npm
  ];

  # The VS Code extensions to install.
  idx.extensions = [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode"
  ];

  # Commands to run on environment startup.
  idx.bootstrap = [
    "npm ci"
  ];

  # The previews to run.
  idx.previews = {
    web = {
      command = [
        "npm",
        "run",
        "start",
        "--",
        "--port",
        "$PORT",
        "--host",
        "0.0.0.0"
      ];
      manager = "web";
    };
  };
}
