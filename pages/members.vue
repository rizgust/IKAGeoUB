<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Member List"
      subtitle="Members of Ikatan Alumni Geofisika UB"
      image="/uploads/about-member.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Member List</h3>
          <iframe
            class="airtable-embed"
            src="https://airtable.com/embed/shrFLYtUmlgWMBmcg?backgroundColor=gray&layout=card&viewControls=on"
            frameborder="0"
            onmousewheel=""
            width="100%"
            style="background: transparent; border: 1px solid #fff; height: 1400px;"
          ></iframe>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
    head() {
        return {
            title: `Anggota | ${this.$siteConfig.siteName}`
        }
    },
    components: {}
}
</script>
