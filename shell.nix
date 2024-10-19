{
  pkgs ? import <nixpkgs> { config.allowUnfree = true; },
}:

let
  nodejs = pkgs.nodejs_20;
in
with pkgs;
mkShell {
  packages = [
    google-chrome
    nodejs
    nodePackages.npm
    nodePackages."@angular/cli"
    firebase-tools
  ];
  CHROME_BIN="google-chrome-stable";
}
