TAG=`cat TAGNAME.github`
mkdir work

URL=`curl https://api.github.com/repos/packwiz/packwiz-installer-bootstrap/releases/latest | jq '.["assets"][0]["browser_download_url"]' | tr -d '"'`
curl -L ${URL} > pw.jar

cd work && java -jar ../pw.jar -g -s client "https://raw.githubusercontent.com/Sascha-T/MoondialPackwiz/${TAG}/pack.toml"
zip -D -r -q ../mods.zip *
