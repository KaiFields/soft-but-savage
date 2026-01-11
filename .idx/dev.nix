{ pkgs, ... }: {
  channel = "unstable";

  packages = [ pkgs.nodejs_22 pkgs.npm ];

  idx.extensions = [
    "dbaeumer.vscode-eslint"
    "esbenp.prettier-vscode"
  ];

  idx.bootstrap = [ "npm ci" ];

  idx.previews = {
    web = {
      command = [ "npm" "run" "start" "--" "--port" "PORT" "--host" "0.0.0.0" ];
      manager = "web";
    };
  };
}
