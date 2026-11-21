module.exports = {
  siteUrl: process.env.SITE_URL || 'https://eldenhub.appforgelabs.com/',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  // Static export: write into the deployed folder, not public/.
  outDir: 'out',
}
