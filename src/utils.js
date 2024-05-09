export const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");

canvas.width = innerWidth-50;
canvas.height = innerHeight-50;

export const rand = ((b,a=0)=> a + Math.floor(Math.random()*(b-a)));
