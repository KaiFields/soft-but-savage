{ pkgs, ... }: {
  channel = "unstable"; # or "stable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.bun
    pkgs.nodejs_22
    pkgs.nodePackages.typescript
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.tailwindcss
    pkgs.nodePackages.tailwindcss-language-server
  ];

  # Use https://open-vsx.org to find extensions
  idx.extensions = [
    "csstools.postcss"
    "bradlc.vscode-tailwindcss"
    "dsznajder.es7-react-js-snippets"
    "ms-vscode.typescript-next"
    "dbaeumer.vscode-eslint"
    "esbenp.prettier-vscode"
  ];

  # Set up environment variables
  env = {
    # Example:
    # PATH = pkgs.lib.makeBinPath [ pkgs.jq ];
  };

  # The commented out code below is an example of how to configure a preview for your app.
  # idx.previews = {
  #   # Example:
  #   # web = {
  #   #   command = [ "npm" "run" "start" "--" "--port" "$PORT" ];
  #   #   manager = "web";
  #   #   env = {
  #   #     # Example:
  #   #     # BROWSER = "open";
  #   #   };
  #   # };
  # };
  idx.previews = {
    web = {
      command = [ "npm" "run" "start" "--" "--port" "$PORT" "--host" "0.0.0.0" ];
      manager = "vite";
    };
  };

  # Enable previews and customize configuration
  # idx.previews = {
  #   enable = true;
  #   previews = {
  #     # Your preview configurations
  #   };
  # };

  # Autostart processes
  idx.autostart = {
    # Example:
    # # start a development server
    # web-dev = {
    #   name = "Web Dev";
    #   command = [ "npm" "run" "dev" ];
    #   icon = "web";
    # };
    # # run a database
    # db = {
    #   name = "Database";
    #   command = [ "docker" "run" "-v" "postgres-data:/var/lib/postgresql/data" "postgres" ];
    #   icon = "database";
    # }
  };

  # Specify a start command
  idx.start = {
    # Example:
    # # start a development server
    # web-dev = {
    #   name = "Web Dev";
    #   command = [ "npm" "run" "dev" ];
    #   icon = "web";
    # };
  };

  idx.bootstrap = [ "npm" "install" ];

  # More advanced customization
  #
  # nixpkgs.config = {
  #   # For example, to allow unfree packages
  #   allowUnfree = true;
  #   # Or to use a different version of a package
  #   overlays = [
  #     (final: prev: {
  #       # Example:
  #       # go = prev.go_1_20;
  #     })
  #   ];
  # };
}
