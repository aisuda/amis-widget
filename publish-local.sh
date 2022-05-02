#!/bin/bash
set -e

echo "$0";
echo "$1";

rm -rf npm
mkdir npm

cp package.json npm
cp amis.config.js npm
cp tsconfig.json npm

# npm run build2esm

cp -rf src npm

cd npm

sed -i '' -e 's/\"name\": \"amis-widget\"/\"name\": \"@fex\/amis-widget\"/g' ./package.json
sed -i '' -e 's/\"amis-editor\":/\"@fex\/amis-editor\":/g' ./package.json
sed -i '' -e 's/\"amis\":/\"@fex\/amis\":/g' ./package.json

sed -i '' -e "s/\'amis-editor\'/\'@fex\/amis-editor\'/g" ./amis.config.js
sed -i '' -e "s/\'amis\'/\'@fex\/amis\'/g" ./amis.config.js

for f in $(find ./src -name "*.ts"); do
  sed -i '' -e "s/from \'amis/from \'@fex\/amis/g" $f
  sed -i '' -e "s/from \'amis-editor/from \'@fex\/amis-editor/g" $f
done

for f in $(find ./src -name "*.tsx"); do
  sed -i '' -e "s/from \'amis/from \'@fex\/amis/g" $f
  sed -i '' -e "s/from \'amis-editor/from \'@fex\/amis-editor/g" $f
done

for f in $(find ./src -name "*.jsx"); do
  sed -i '' -e "s/from \'amis/from \'@fex\/amis/g" $f
  sed -i '' -e "s/from \'amis-editor/from \'@fex\/amis-editor/g" $f
done


npm i
amis build2lib

npm publish --registry=http://registry.npm.baidu-int.com

cd ..
# rm -rf npm