## 🧱 Frontend Overview

This frontend is **based on** [`cosmicjs/simple-nextjs-blog`](https://github.com/cosmicjs/simple-nextjs-blog), but has been **heavily customized** to integrate with a local backend API instead of Cosmic.

### 🔄 Key Changes Made

- 🔌 **Removed dependency on Cosmic CMS**  
  All data (posts, authors, metadata) now comes from the local Flask API.
  
- 🧩 **Adapted interfaces**  
  `Post`, `Article`, and `Author` types were redefined to match the new backend response shape.

- ✂️ **Removed unused utilities and functions**  
  Functions such as those for fetching global settings, cosmic config, and preview routes have been removed.

- 🌐 **Environment-based API routing**  
  Uses `NEXT_PUBLIC_API_URL` (e.g., `http://localhost:8000`) to dynamically target the backend.
