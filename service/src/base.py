#!/bin/python
from subprocess import check_output
import sys
import json

def getResponse(git_base, path, callback=None, version=None, target=None):
    resp = {}
    resp['name'] = path

    if target == None:
        response['version'] = getNewestVersion(path)
    else:
        response['version'] = target

    if version == None:
        resp['content']
    else:
        resp['delta'] = generateDiff(version, resp['version'])

def getNewestVersion(path_to_blob):
    return check_output(["git","-C",base_path,"hash-object",path_to_blob])

def generateDiff(old, new):
    raw = check_output(["git","-C",base_path,"diff","-U0","--minimal",old,new])
    raw = raw.decode("utf-8")
    raw = raw.split("\n")
    ret = []
    for line in raw[4:]:
        if line.startswith("@"):
            ret.append(hunkNumbers(line))
        elif line.startswith("+"):
            ret.append(line[1:])
    return ret

# git diff's line numbers are weird and shitty
# we're getting '@@ -1,0 +1,0 @@'
# giving back 'start,stop,new_lines'
def hunkNumbers(line):
    line = line.split(" ")
    ret = (0,0,0)

    old_lines = line[1].split(",")
    old_lines[0] = old_lines[0][1:]
    old_lines[0] = int(old_lines[0]) - 1
    new_lines = line[2].split(",")
    new_lines[0] = new_lines[0][1:]
    new_lines[0] = int(new_lines[0]) - 1

    if (new_lines[0] > old_lines[0]):
        old_lines[0] += 1

    if len(old_lines) > 1:
        old_lines[1] = int(old_lines[1])
        old_lines[1] += old_lines[0]
    else:
        old_lines.append(old_lines[0]+1)

    if len(new_lines) < 2:
        new_lines.append(1)

    return ",".join(map(str,[old_lines[0],old_lines[1],new_lines[1]]))

def main(argv):
    if len(argv) < 3:
        print("Usage: base.py git_base path [callback [my_version [target_version]]]")
        return
    else:
        getResponse(*argv[1:])

