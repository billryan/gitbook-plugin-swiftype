module.exports = {
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ],
        html: {
            "body:end": function() {
                var config = this.options.pluginsConfig.ga || {};
                
                if (!config.token) {
                	throw "Need to option 'token' for Switype plugin";
                }
                
                if (!config.configuration) {
                	config.configuration = '2.0.0';
                }

                if(typeof config.configuration === 'object' && config.configuration !== null) {
                	configuration = JSON.stringify(config.configuration);
                }
                else if (['2.0.0', 'none'].indexOf(config.configuration) != -1) {
                	configuration = "'" + config.configuration + "'";
                }

                return "<script>(function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){}})"
                + "(w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);"
                + "e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);"
                + "})(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');"
                + "_st('install', '"+config.token+"', "+configuration+");"
                + "</script>";
            }
        }
    }
};
