<template>
  <header class="cols">
    <div class="col- col-xs-12 col-md-7 col-lg-8 col-9">
      <h1>Suthep Chanchuphol</h1>
      <blockquote>Frontend Developer</blockquote>
      <p>
        A 3<sup>rd</sup>-year computer-engineering student who is very attentive
        to every detail. Any untidy elements by any pixels cannot bypass his
        sharp, neat, eagle eyes. Still, he is friendly and reasonable rational.
        👨‍💻&#xFE0F;
      </p>
      <table>
        <tbody>
          <tr>
            <td class="text-center" aria-hidden="true">🗺&#xFE0F;</td>
            <td class="pl-1">Bangkok, Thailand.</td>
          </tr>
          <tr>
            <td class="text-center" aria-hidden="true">📞&#xFE0F;</td>
            <td class="pl-1">
              <app-hidden data="(+66) 868 343 127" />
            </td>
          </tr>
          <tr>
            <td class="text-center" aria-hidden="true">📧&#xFE0F;</td>
            <td class="pl-1">
              <app-hidden data="suthep.chanchuphol(at)outlook.com" />
            </td>
          </tr>
          <tr>
            <td aria-hidden="true">
              <m-picture
                :data-images="[{ src: 'github.svg', type: 'image/svg+xml' }]"
                alt="GitHub"
                base-path=""
                block
                img-style="width:.9rem;margin:auto"
                width="24"
                height="24"
              />
            </td>
            <td class="pl-1">
              <a
                href="https://github.com/rootEnginear"
                rel="nofollow noopener noreferrer"
                target="_blank"
                >https://github.com/rootEnginear</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="col- col-xs-12 col-md-5 col-lg-4 col-3 d-flex"
      style="align-items: center"
    >
      <m-picture
        :data-images="profile_images"
        alt="Suthep Chanchuphol"
        base-path=""
        responsive
        img-class="s-circle"
        width="406"
        height="406"
      />
    </div>
  </header>
</template>

<script>
import AppHidden from "@/components/AppHidden";
const PROFILE_IMAGES = [
  { src: "profile.webp", type: "image/webp" },
  { src: "profile.jpg", type: "image/jpeg" },
];

export default {
  name: "IndexHeader",
  components: {
    AppHidden,
  },
  data() {
    return {
      profile_images: PROFILE_IMAGES,
    };
  },
};
</script>