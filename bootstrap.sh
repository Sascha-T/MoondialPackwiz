TAG=`cat TAGNAME.github`
mkdir -p work/.minecraft

URL=`curl https://api.github.com/repos/packwiz/packwiz-installer-bootstrap/releases/latest | jq '.["assets"][0]["browser_download_url"]' | tr -d '"'`
wget ${URL}

mv packwiz-installer-bootstrap.jar work/.minecraft/
cp mmc-pack.json work/
cp icon.png work/
sed "s@%TAGNAME%@${TAG}@g" instance.cfg > work/instance.cfg
cd work; zip -D -r -q ../moondial.zip *
