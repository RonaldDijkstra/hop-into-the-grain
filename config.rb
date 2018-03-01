# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

set :full_url, "https://www.hopintothegrain.nl"

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :directory_indexes
activate :sprockets

set :relative_links, true
set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :images_dir, "images"

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Helpers

helpers do
  # Use frontmatter for meta description
  def meta_description(page = current_page)
    return page.data.description if page.data.description
  end

  # Use frontmatter for meta robots or use default
  def robots(page = current_page)
    return page.data.robots if page.data.robots
    "noydir,noodp,index,follow"
  end

  # Active navigation items
  def nav_link(link_text, url, options = {})
    options[:class] ||= ""
    options[:class] << " active" if url == current_page.url
    link_to(link_text, url, options)
  end

  # Retrieve full_url
  def full_url(url)
    URI.join(config[:full_url], url).to_s
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.remote = "git@github.com:RonaldDijkstra/hop-into-the-grain.git"
end