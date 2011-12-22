desc "Build javascript"
task :build do
  JavascriptBuilder.build
end

class JavascriptBuilder

  def self.build
    sh "node public/js/app.build.js"
  end

end