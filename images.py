#!/usr/bin/env python3
import json
import os


def read_files(path):
    """
    find jpg files and return them
    """
    return sorted([f for f in os.listdir(path) 
            if os.path.isfile(
                os.path.join(path, f)
            ) and f.endswith('.jpg')])


def save(data, path):
    """
    Saves list as json
    """
    json.dump(data, open(os.path.join(path, 'images.json'), 'w'))


if __name__ == '__main__':
    import sys
    path = sys.argv[1]
    data = read_files(path)
    save(data, path)

