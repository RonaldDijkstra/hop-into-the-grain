## Serve
# namespace :serve do
#   def serve(env)
#     puts "*"*50
#     puts "* Serving Beer"
#     puts "*"*50
#     system "bundle exec middleman"
#   end
#
#   desc "Serve Beer"
#   task :nl do
#     serve :nl
#   end
# end

task :serve do
  puts "*"*50
  puts "Serving Beer!"
  puts "*"*50
  system "bundle exec middleman"
end

task :build do
  puts "*"*50
  puts "Brewing Beer!"
  puts "*"*50
  system "bundle exec middleman build --clean" or exit(1)
end

# Deploy
task :deploy do
  begin
    Rake::Task["build"].invoke
  rescue SystemExit => e
    puts "*"*50
    puts "* Build failed, skipping deployment"
    puts "*"*50
    exit(e.status)
  end

  puts "*"*50
  puts "* Build successful, Deploying Beer... "
  puts "*"*50
  system "bundle exec middleman deploy" or exit(1)
end
