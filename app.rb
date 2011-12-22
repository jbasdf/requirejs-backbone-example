require 'rubygems'
require 'sinatra'
  
get '/' do
  File.read('index.html')
end

get '/dev' do
  File.read('dev.html')
end

get '/jquery' do
  File.read('jquery.html')
end

get '/bookmarklet' do
  File.read('bookmarklet.html')
end