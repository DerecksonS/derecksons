<template>
    <section>
      <nuxt-link to="/">
        <span class="logo">
          <svg class="logo-svg" x="0px" y="0px" viewBox="0 0 50.71 72.47" style="enable-background:new 0 0 50.71 72.47;">
            <path class="st0" d="M5.42,66.56l1.85,1.85c4.82,4.83,7.3,4.63,11.91,0l23.7-23.86c0.19-0.18,0.36-0.31,0.55-0.5l1.85-1.85
              c1.64-1.63,2.64-2.98,3.15-4.25c0.05-0.12,0.13-0.25,0.17-0.36c0.08-0.25,0.1-0.5,0.13-0.75c0.03-0.21,0.09-0.42,0.09-0.63
              c0-0.21-0.06-0.42-0.09-0.63c-0.03-0.25-0.05-0.5-0.13-0.75c-0.04-0.11-0.12-0.24-0.17-0.36c-0.5-1.26-1.51-2.62-3.15-4.24
              l-1.85-1.85c-0.19-0.2-0.36-0.33-0.55-0.51L19.19,4.06c-4.62-4.62-7.09-4.83-11.91,0L5.43,5.91c-4.83,4.83-4.62,7.29,0,11.92
              l18.26,18.38L5.42,54.64C0.8,59.27,0.59,61.73,5.42,66.56z"/>
          </svg>
          <i></i>
        </span>
      </nuxt-link>
    </section>
</template>

<style lang="scss">

.logo {
  width: 50px;
  height: 50px;
  margin: 80px auto 0;
  position: relative;
  display: block;

  &:hover {
      .logo-svg {

        path {
          fill: #e6be21!important;
        }
      }
      i {
        opacity: 1;
      }
    }

  &:before, &:after {
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
  }

  &:before {
    width: 0;
    height: 0;
    @include theme('background-color', $colorReverse);
    border-radius: 50%;
    top: 12px;
    left: 0;
    animation: leftLogo 1.3s ease forwards;
    animation-delay: 1000ms;
  }
  &:after {
    width: 0;
    height: 0;
    z-index: 9;
    left: 0;
    @include theme('background-color', $colorReverse);
    border-radius: 50%;
    left: 0;
    animation: rightLogo 1.3s ease forwards;
    animation-delay: 1000ms;
  }

  i {
    width: 50px;
    height: 70px;
    top: -12px;
    left: -3px;
    z-index: 98;
    background: url('./../static/img/layout/ico-logo-dereckson-partial.svg') no-repeat;
    transform: rotate(180deg);
    position: absolute;
    opacity: 0;
    animation: applyColor 1s ease forwards;
    animation-delay: 2.3s;
  }
}

  .logo-svg {
    width: 35px;
    height: auto;
    top: 3px;
    left: 5px;
    position: relative;
    z-index: 10;
    transition: .6s;
    transform: rotateY(0);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    perspective: 1000px; 
    z-index: 99;
    animation: openCode 0.6s ease forwards;
    animation-delay: 2.2s;

    path{
      stroke-dasharray: 1000;
      stroke-dashoffset: 1200;
      fill: none;
      stroke: #8e8e8d;
      animation: 3000ms linear 1120ms 1 normal forwards running dash;
    }
  }

@keyframes dash {
  from {
    stroke-dashoffset: 1200;
    fill: none;
  }
  to {
    stroke-dashoffset: 0;
    fill: #fff;
    
  }
}

@keyframes leftLogo {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
    border-radius: 50%;
    left: 0;
  }
  5% {
    opacity: 1;
    width: 25px;
    height: 25px;
  }

  25% {
    left: -15px;
    height: 50px;
  }

  35% {
    width: 20px;
    height: 50px;
    top: 0px;
    border-radius: 35%;
  }

  45% {
    height: 50px;
    top: 0;
    left: -5px;

  }

  50% {
    top: -5px;
    height: 65px;
  }



  100% {
    top: -5px;
    height: 65px;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
  }


}

@keyframes rightLogo {
  0% {
    opacity: 1;
    border-radius: 50%;
    left: 0;
  }
  5% {
    width: 50px;
    height: 50px;
    opacity: 1;
    left: 3px;
    height: 50px;
  }

  25% {
    opacity: 1;
    left: 15px;
    height: 50px;
  }

  35% {
    width: 45px;
    height: 50px;
    border-radius: 45%;
  }

  45% {
    left: -5px;
    height: 50px;
    top: 0;
    border-top-left-radius: 20%;
    border-bottom-left-radius: 20%;
  }
  
  50% {
    top: -5px;
    height: 65px;
  }

  100% {
    width: 55px;
    height: 65px;
    top: -5px;
    left: -5px;
    border-top-left-radius: 10%;
    border-bottom-left-radius: 10%;
  }

}

@keyframes openCode {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg) translateZ(-40px);
    left: -50px;
  }
}

@keyframes applyColor {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

 @media (prefers-color-scheme: light) 
{
  .logo {
    i {
      background: url('./../static/img/layout/ico-logo-dereckson-partial-white.svg') no-repeat;
    }
  }
}

</style>
