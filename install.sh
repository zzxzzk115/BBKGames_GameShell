#!/bin/bash

# 下载Release内容，并解压
cd ~
mkdir -p tmp
cd tmp
wget https://download.fastgit.org//zzxzzk115/BBKGames_GameShell/releases/latest/download/BBK-Games.zip
unzip BBK-Games.zip

# 安装
cd ~/tmp/BBK-Games
sudo chmod +x install.sh
bash install.sh

# 删除临时内容
sudo rm -rf ~/tmp/BBK-Games*

# 提示安装完成，需要刷新菜单界面
echo Done! Please refresh menu.