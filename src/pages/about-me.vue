<template>
  <div class="container">
    <aside>
      <HeroAvatar>
        <img
          src="@/assets/img/profile.jpg"
          alt="me"
          width="140"
          loading="lazy"
        />
      </HeroAvatar>
      <BinaryTextSVG />
    </aside>
    <main id="main-content">
      <article class="about-content">
        <h1 class="about-content__headline">About me</h1>
        <p>👋 Hey! How are you?</p>
        <p>
          I'm Srika. I'ma <strong>postdoctoral research fellow</strong> in Alex Nectow's lab at Columbia University,
          specializing in <em>behavioral, circuit, and molecular neuroscience</em>.
        </p>
        <p>
          My long-term research interests are focused on understanding the neurobiological basis of animal behavior and
          associated disorders to advance human health.
        </p>
        <p>
          My academic training and research experiences have given me a strong foundation in multiple biological
          disciplines, including neurophysiology, molecular biology, biochemistry, and genetics. During undergraduate
          studies, I worked with Dr. ASM Noman on the impact of environmental stress on organs and molecules. Later, as
          a predoctoral student under Dr. Akihiro Yamanaka at Nagoya University, I discovered a specific neural
          connection and its role in sleep regulation. During my postdoctoral training at Columbia University, my work
          revealed a neurobiological mechanism of eating behavior regulation.
        </p>
        <p>
          I will continue to build on my previous training to reveal the neural underpinning of eating
          behavior-related mental health disorders. The proposed research will provide me with new conceptual and
          technical training in the neurobiology of mental health. Besides, the successful completion of this fellowship
          will outline a set of career development activities designed to enhance my ability to be an independent
          investigator.
        </p>
        <SocialMediaIcons boxed />
      </article>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import config from '../config/siteconfig.json'

const title = 'About me • Jeferson S. Brito'
const { description } = config
const route = useRoute()

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: `${config.siteUrl}${route.path}` },
    {
      property: 'twitter:title',
      content: title,
    },
    {
      property: 'twitter:description',
      content: description,
    },
  ],
})
</script>

<route lang="yaml">
meta:
layout: default
</route>

<style lang="css" scoped>
.container {
  flex-flow: row wrap;
  padding: 3rem 0;
  gap: 2.4rem;
}

.about-content {
  & .about-content__headline {
    font-size: var(--text-2xl);
  }

  & p {
    font-size: var(--text-lg);
    opacity: 0.8;
    max-width: 71ch;
  }
}

.hero-avatar {
  opacity: 0;
  animation: tilt-in 900ms 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes tilt-in {
  0% {
    transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}

.binary-text-svg {
  font-family: var(--font-mono);
  font-size: var(--text-xl);
  position: absolute;
  left: 282px;
  top: 387px;
  opacity: 0.3;

  & :deep(tspan) {
    --text-delay: 500ms;

    opacity: 0;
    animation: pulse-spread 3s var(--text-delay) ease-out infinite alternate;

    &:nth-child(1) {
      --text-delay: 500ms;
    }

    &:nth-child(2) {
      --text-delay: 1s;
    }

    &:nth-child(3) {
      --text-delay: 1.5s;
    }

    &:nth-child(4) {
      --text-delay: 2s;
    }

    &:nth-child(5) {
      --text-delay: 2.5s;
    }

    &:nth-child(6) {
      --text-delay: 3s;
    }
  }
}

@keyframes pulse-spread {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.3;
  }
}

@media screen and (min-width: 26.625em) and (max-width: 48em) {
  aside {
    margin-inline-start: 40px;
    padding: 0 2.4rem 0 0;
  }
}

@media (--vw-sm) {
  aside {
    padding: 0 1rem;
  }

  .container {
    height: 100%;
  }

  .binary-text-svg {
    top: 50%;
    left: 0;
    bottom: 0;
  }
}
</style>
