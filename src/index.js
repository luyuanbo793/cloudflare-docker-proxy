addEventListener("fetch", (event) => {
  event.passThroughOnException();
  event.respondWith(handleRequest(event.request));
});

const dockerHub = "https://registry-1.docker.io";

const routes = {
  // production
  ["docker.luyb.us.kg"]: dockerHub,
  ["quay.luyb.us.kg"]: "https://quay.io",
  ["gcr.luyb.us.kg"]: "https://gcr.io",
  ["k8s-gcr.luyb.us.kg"]: "https://k8s.gcr.io",
  ["k8s.luyb.us.kg"]: "https://registry.k8s.io",
  ["ghcr.luyb.us.kg"]: "https://ghcr.io",
  ["cloudsmith.luyb.us.kg"]: "https://docker.cloudsmith.io",
  ["ecr.luyb.us.kg"]: "https://public.ecr.aws",

  // staging
  ["docker-staging.luyb.us.kg"]: dockerHub,
};

// 将 tips.html 的内容作为字符串嵌入
const tipsHtmlContent = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="docker|dockerhub|vps|加速"> 
<meta name="description" content="加速-https://hzrqc46we3.feishu.cn/docx/NMvbdjJtnoKeEwx5JaOc1qevnCg-VPS | AIGC | Proxy | TVBox">
<title>Docker镜像加速-加速</title>
<style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #3d3d3d;
            margin: 0;
            padding: 20px;
            background: #242424;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: rgba(20, 19, 19, 0.8);
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3 {
            color: #ece6ec;
        }
        p {
            margin-bottom: 1em;
            color: #f8f8f2;
        }
        pre {
            background: #2d2d2d;
            color: #f8f8f2;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            position: relative;
        }
        pre::before {
            content: " ";
            display: block;
            position: absolute;
            top: 10px;
            left: 10px;
            width: 12px;
            height: 12px;
            background: #ff5f56;
            border-radius: 50%;
            box-shadow: 20px 0 0 #ffbd2e, 40px 0 0 #27c93f;
        }
        code {
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
            font-size: 0.875em;
        }
        .copy-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #007aff;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s;
        }
        pre:hover .copy-button {
            opacity: 1;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            color: #ece6ec;
            font-size: 0.875em;
        }
        .footer a {
            color: #007aff;
            text-decoration: none;
        }
        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
<div class="container">
<center><h2><a href="https://hzrqc46we3.feishu.cn/docx/NMvbdjJtnoKeEwx5JaOc1qevnCg" target="_blank">自用</a> Docker Hub 镜像加速</h2></center>
<h3>为了加速镜像拉取，使用以下命令设置<b>registry mirror</b></h3>
<pre><code>
mkdir -p /etc/docker</code><button class="copy-button" onclick="copyCode(this)">复制代码</button></pre>
<pre><code>
tee /etc/docker/daemon.json <<EOF
{
    "registry-mirrors": ["https://docker.laoex.link"]
}
EOF</code><button class="copy-button" onclick="copyCode(this)">复制代码</button></pre>
<pre><code>
systemctl daemon-reload</code><button class="copy-button" onclick="copyCode(this)">复制代码</button></pre>
<pre><code>
systemctl restart docker</code><button class="copy-button" onclick="copyCode(this)">复制代码</button></pre>
<p><h3>不用设置环境也可以直接使用，用法示例：</h3></p>
<pre><code>
docker pull qdocker.luyb.us.kg/library/mysql:8.0</code><button class="copy-button" onclick="copyCode(this)">复制代码</button></pre>
<p>说明：library是一个特殊的命名空间，它代表的是官方镜像。</p>
</div>
<div class="footer">
    &copy; <a href="https://hzrqc46we3.feishu.cn/docx/NMvbdjJtnoKeEwx5JaOc1qevnCg" target="_blank">老E的博客</a>自建镜像，请勿滥用。
</div>
<script>
        function copyCode(button) {
            const code = button.previousSibling;
            const textArea = document.createElement('textarea');
            textArea.value = code.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            button.textContent = '已复制';
            setTimeout(() => {
                button.textContent = '复制代码';
            }, 2000);
        }
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'896b4e01b8b8985b',t:'MTcxODg4MTc0Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
`;

function routeByHosts(host) {
  if (host in routes) {
    return routes[host];
  }
  if (MODE == "debug") {
    return TARGET_UPSTREAM;
  }
  return "";
}

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // 检查是否是根目录请求
  if (url.pathname === "/") {
    return new Response(tipsHtmlContent, {
      status: 200,
      headers: {
        "content-type": "text/html"
      }
    });
  }

  const upstream = routeByHosts(url.hostname);
  if (upstream === "") {
    return new Response(
      JSON.stringify({
        routes: routes,
      }),
      {
        status: 404,
      }
    );
  }
  const isDockerHub = upstream == dockerHub;
  const authorization = request.headers.get("Authorization");
  if (url.pathname == "/v2/") {
    const newUrl = new URL(upstream + "/v2/");
    const headers = new Headers();
    if (authorization) {
      headers.set("Authorization", authorization);
    }
    // check if need to authenticate
    const resp = await fetch(newUrl.toString(), {
      method: "GET",
      headers: headers,
      redirect: "follow",
    });
    if (resp.status === 401) {
      return responseUnauthorized(url);
    }
    return resp;
  }
  // get token
  if (url.pathname == "/v2/auth") {
    const newUrl = new URL(upstream + "/v2/");
    const resp = await fetch(newUrl.toString(), {
      method: "GET",
      redirect: "follow",
    });
    if (resp.status !== 401) {
      return resp;
    }
    const authenticateStr = resp.headers.get("WWW-Authenticate");
    if (authenticateStr === null) {
      return resp;
    }
    const wwwAuthenticate = parseAuthenticate(authenticateStr);
    let scope = url.searchParams.get("scope");
    // autocomplete repo part into scope for DockerHub library images
    // Example: repository:busybox:pull => repository:library/busybox:pull
    if (scope && isDockerHub) {
      let scopeParts = scope.split(":");
      if (scopeParts.length == 3 && !scopeParts[1].includes("/")) {
        scopeParts[1] = "library/" + scopeParts[1];
        scope = scopeParts.join(":");
      }
    }
    return await fetchToken(wwwAuthenticate, scope, authorization);
  }
  // redirect for DockerHub library images
  // Example: /v2/busybox/manifests/latest => /v2/library/busybox/manifests/latest
  if (isDockerHub) {
    const pathParts = url.pathname.split("/");
    if (pathParts.length == 5) {
      pathParts.splice(2, 0, "library");
      const redirectUrl = new URL(url);
      redirectUrl.pathname = pathParts.join("/");
      return Response.redirect(redirectUrl, 301);
    }
  }
  // foward requests
  const newUrl = new URL(upstream + url.pathname);
  const newReq = new Request(newUrl, {
    method: request.method,
    headers: request.headers,
    // don't follow redirect to dockerhub blob upstream
    redirect: isDockerHub ? "manual" : "follow",
  });
  const resp = await fetch(newReq);
  if (resp.status == 401) {
    return responseUnauthorized(url);
  }
  // handle dockerhub blob redirect manually
  if (isDockerHub && resp.status == 307) {
    const location = new URL(resp.headers.get("Location"));
    const redirectResp = await fetch(location.toString(), {
      method: "GET",
      redirect: "follow",
    });
    return redirectResp;
  }
  return resp;
}

function parseAuthenticate(authenticateStr) {
  // sample: Bearer realm="https://auth.ipv6.docker.com/token",service="registry.docker.io"
  // match strings after =" and before "
  const re = /(?<=\=")(?:\\.|[^"\\])*(?=")/g;
  const matches = authenticateStr.match(re);
  if (matches == null || matches.length < 2) {
    throw new Error(`invalid Www-Authenticate Header: ${authenticateStr}`);
  }
  return {
    realm: matches[0],
    service: matches[1],
  };
}

async function fetchToken(wwwAuthenticate, scope, authorization) {
  const url = new URL(wwwAuthenticate.realm);
  if (wwwAuthenticate.service.length) {
    url.searchParams.set("service", wwwAuthenticate.service);
  }
  if (scope) {
    url.searchParams.set("scope", scope);
  }
  const headers = new Headers();
  if (authorization) {
    headers.set("Authorization", authorization);
  }
  return await fetch(url, { method: "GET", headers: headers });
}

function responseUnauthorized(url) {
  const headers = new(Headers);
  if (MODE == "debug") {
    headers.set(
      "Www-Authenticate",
      `Bearer realm="http://${url.host}/v2/auth",service="cloudflare-docker-proxy"`
    );
  } else {
    headers.set(
      "Www-Authenticate",
      `Bearer realm="https://${url.hostname}/v2/auth",service="cloudflare-docker-proxy"`
    );
  }
  return new Response(JSON.stringify({ message: "UNAUTHORIZED" }), {
    status: 401,
    headers: headers,
  });
}
