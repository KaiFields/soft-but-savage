{ pkgs, ... }: {
  # The Nix channel to use.
  channel = "stable-24.05";

  # The packages to install in the environment.
  packages = [
    pkgs.nodejs_20
    pkgs.eslint
    pkgs.prettier
  ];

  # The VS Code extensions to install.
  idx.extensions = [
    "dbaeumer.vscode-eslint"
    "esbenp.prettier-vscode"
  ];

  # The previews to run.
  idx.previews = {
    web = {
      command = [
        "npm"
        "run"
        "start"
        "--"
        "--port"
        "$PORT"
        "--host"
        "0.0.0.0"
      ];
      manager = "web";
    };
  };
}
