{ pkgs, ... }: {
  channel = "unstable";
  packages = [
    pkgs.nodejs_20
    pkgs.npm
  ];
  idx.extensions = [
    "dbaeumer.vscode-eslint"
    "esbenp.prettier-vscode"
  ];
  idx.bootstrap = [ "npm" "install" ];
  idx.previews.web.command = [ "npm" "run" "start" "--" "--port" "$PORT" "--host" "0.0.0.0" ];
  idx.previews.web.manager = "web";
}
