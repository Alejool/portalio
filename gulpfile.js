import gulp from 'gulp'
import imageMin from 'gulp-imagemin'
import webp from 'gulp-webp';

const{dest, src}=gulp;



function mimificar(){
  return src('public/imga/**/*.{jpg,png,svg}')
        .pipe(imageMin({optimizationLevel:8}))
        .pipe(dest('img/'))
}

function imgWebp(){
  const opciones= {
    quality:50
  };
  return src('public/imga/**/*')
        .pipe(webp(opciones))
        .pipe(dest('public/webp/'))
}

export default imgWebp
