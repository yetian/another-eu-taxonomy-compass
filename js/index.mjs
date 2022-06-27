// load vue engine
const { createApp } = Vue
const { loadModule } = window['vue3-sfc-loader']
const vue3_loader_options = {
  moduleCache: {
    vue: Vue
  },
  async getFile(url) {
        
    const res = await fetch(url);
    if ( !res.ok )
      throw Object.assign(new Error(res.statusText + ' ' + url), { res });
    return {
      getContentData: asBinary => asBinary ? res.arrayBuffer() : res.text(),
    }
  },
  addStyle(textContent) {

    const style = Object.assign(document.createElement('style'), { textContent });
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  }
}

// load js as a module
import taxonomy_104 from '/compass-docu/taxonomy-1.0.4.json' assert { type: 'json' }

createApp({
  data() {
    return {
      taxonomy: taxonomy_104
    }
  },
  components: {
    'component_sector': Vue.defineAsyncComponent( () => loadModule('/js/vue/sector.vue', vue3_loader_options) ),
    'component_activity': Vue.defineAsyncComponent( () => loadModule('/js/vue/activity.vue', vue3_loader_options) )
  },
  methods: {
    getActivities: function (sector) {
      if (sector) {
        return this.taxonomy?.activities?.filter(activity => activity.sector === sector)
      }
      return []
    }
  }
}).mount('#app')