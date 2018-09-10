'use strict';

import fetch from 'isomorphic-fetch';


export function getBlocks(noOfLastBlocks) {
  return getBlocks('/v1/api/blocks/', noOfLastBlocks);
}

function getBlocks(url, noOfLastBlocks) {
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({ noOfLastBlocks })
  }).then(async res => {
    const blocks = await res.json();
    return blocks;
  });
}
