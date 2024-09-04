import os
import subprocess

def power_shell_cd(directory, argument):
    command = f"cd {directory} ; {argument}"
    
    try:
        subprocess.Popen(["powershell", "-Command", command], shell=True)
    except Exception as e:
        print("Помилка:", e)

let = input("Type ")

if int(let) == 0:
    os.system(r"g++ -std=c++17 -O2 -Iinclude -o C:\Users\god19\Desktop\Installer-app\main.exe main.cpp src/httplib.cc src/function.cpp src/server.cpp src/config.cpp src/html.cpp -lkernel32 -luser32 -lcomdlg32 -lole32 -lshlwapi -lversion -lws2_32 -lz -lminizip -mwindows")
    os.startfile('main.exe')
elif int(let) == 1:
    os.system("git add -A")
    name = input("Name: ")
    os.system(f'git commit -m "{name}"')
    os.system("git push")
elif int(let) == 2:
    power_shell_cd("server", "npm start")