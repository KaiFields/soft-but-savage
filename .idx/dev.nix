{ pkgs, ... }: {
  channel = "unstable";
  packages = [
    pkgs.nodejs_20,
    pkgs.npm
  ];
  idx = {
    extensions = [
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode"
    ];
    bootstrap = [ "npm" "install" ];
    previews = {
      web = {
        command = [ "npm" "run" "start" "--" "--port" "$PORT" "--host" "0.0.0.0" ];
        manager = "web";
      };
    };
  };
}