module.exports = {
    book: {
        assets: "./book",
        js: [
            "plugin.js"
        ],
        html: {
            "body:end": function() {
                var config = this.options.pluginsConfig.swiftype || {};
                
                if (!config.token) {
                	throw "Need to option 'token' for Switype plugin";
                }
                
                if (!config.version) {
                	config.version = '2.0.0';
                }
		version = "'" + config.version + "'";

                return "<script>(function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){}})"
                + "(w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);"
                + "e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);"
                + "})(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');"
                + "_st('install', '"+config.token+"', "+version+");"
                + "</script>";
            }
        }
    }
};
