require 'rubygems'
require 'sinatra'
  
get '/' do
  File.read('index.html')
end

get '/dev' do
  File.read('index_dev.html')
end

get '/jquery' do
  File.read('index_jquery.html')
end