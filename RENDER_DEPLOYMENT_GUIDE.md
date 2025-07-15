# UMMAH AI Platform - Render.com Deployment Guide

## 🚀 Complete Deployment Instructions for Render.com

### 📋 Project Overview
- **Frontend**: React + TypeScript + Vite (Static Site)
- **Backend**: FastAPI + Python (Web Service)
- **Database**: PostgreSQL (Add-on)
- **Cache**: Redis (External service)

---

## 🎯 Frontend Deployment (Static Site)

### 1. Service Configuration
- **Service Type**: Static Site
- **Build Command**: Already built (use existing dist folder)
- **Publish Directory**: `frontend/dist`
- **Auto-Deploy**: Yes

### 2. Environment Variables
```bash
VITE_BACKEND_URL=https://your-backend-service.onrender.com
VITE_API_BASE_URL=https://your-backend-service.onrender.com/api
VITE_WS_URL=wss://your-backend-service.onrender.com
VITE_REALTIME_API_URL=https://your-backend-service.onrender.com/api/v1/realtime
VITE_TRADING_API_URL=https://your-backend-service.onrender.com/api/trading
VITE_GPT_API_URL=https://your-backend-service.onrender.com/api/v1/gpt-agents
VITE_APP_NAME=UMMAH AI Platform
VITE_APP_VERSION=2.0.0
VITE_ENABLE_VOICE_COMMANDS=true
VITE_ENABLE_3D_VISUALIZATION=true
VITE_ENABLE_XR_MODE=true
VITE_ENABLE_STEALTH_MODE=true
VITE_DEFAULT_THEME=dark
VITE_ENABLE_THEME_SWITCHING=true
VITE_WS_RECONNECT_INTERVAL=5000
VITE_WS_MAX_RETRIES=10
```

### 3. Build Process
The frontend is already built and ready in the `frontend/dist/` folder. No additional build steps required.

---

## ⚙️ Backend Deployment (Web Service)

### 1. Service Configuration
- **Service Type**: Web Service
- **Environment**: Python 3.11+
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
- **Root Directory**: `backend/`

### 2. Required Files to Create

#### requirements.txt
```txt
fastapi==0.104.1
uvicorn[standard]==0.24.0
sqlalchemy==2.0.23
alembic==1.12.1
psycopg2-binary==2.9.9
redis==5.0.1
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.6
websockets==12.0
openai==1.3.7
anthropic==0.7.7
pydantic==2.5.0
pydantic-settings==2.1.0
python-dotenv==1.0.0
aioredis==2.0.1
celery==5.3.4
```

#### main.py (in backend/app/)
```python
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI(
    title="UMMAH AI Platform API",
    description="Advanced AI-driven cryptocurrency trading platform",
    version="2.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "UMMAH AI Platform API", "version": "2.0.0"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "UMMAH AI Backend"}

@app.get("/api/health")
async def api_health():
    return {"status": "API is running", "version": "2.0.0"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", 8000)))
```

### 3. Environment Variables
```bash
# Database (use Render PostgreSQL add-on)
DATABASE_URL=postgresql://username:password@hostname:5432/database_name

# Redis (use external Redis service)
REDIS_URL=redis://hostname:6379/0

# Security
SECRET_KEY=your-super-secret-key-change-in-production
DEBUG=False

# AI Services (add your API keys)
OPENAI_API_KEY=sk-your-openai-api-key-here
ANTHROPIC_API_KEY=sk-ant-your-claude-api-key-here
GPT_ENABLED=true
CLAUDE_ENABLED=true
OPENAI_MODEL=gpt-4o
CLAUDE_MODEL=claude-3-opus-20240229

# CORS (update with your frontend URL)
ALLOWED_ORIGINS=https://your-frontend-site.onrender.com,https://ummah-ai.com

# Voice Assistant
RASA_ENABLED=true
VOICE_ASSISTANT=true
RASA_LANGUAGE=ru
USE_WHISPER=true
USE_TTS=coqui

# Platform Configuration
API_VERSION=vX
PLATFORM_NAME=UMMAH_AI_INFINITY_GRID
ALLOWED_HOSTS=your-backend-service.onrender.com
LOG_LEVEL=INFO
METRICS_ENABLED=true

# Optional Exchange APIs
BINANCE_API_KEY=your-binance-key
BINANCE_SECRET_KEY=your-binance-secret
COINBASE_API_KEY=your-coinbase-key
COINBASE_SECRET_KEY=your-coinbase-secret
KRAKEN_API_KEY=your-kraken-key
KRAKEN_SECRET_KEY=your-kraken-secret
```

---

## 🗄️ Database Setup

### 1. Add PostgreSQL Add-on
1. Go to your backend service dashboard
2. Click "Add-ons" → "PostgreSQL"
3. Choose plan (Free tier available)
4. The `DATABASE_URL` will be automatically set

### 2. Redis Setup
Use external Redis service like:
- **Redis Cloud** (free tier available)
- **Upstash Redis** (serverless Redis)
- Set `REDIS_URL` environment variable

---

## 📝 Step-by-Step Deployment

### Step 1: Deploy Backend
1. Create new **Web Service** on Render
2. Connect your GitHub repository
3. Set **Root Directory**: `backend/`
4. Set **Build Command**: `pip install -r requirements.txt`
5. Set **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
6. Add all environment variables from above
7. Add PostgreSQL add-on
8. Deploy service

### Step 2: Deploy Frontend
1. Create new **Static Site** on Render
2. Connect same GitHub repository
3. Set **Publish Directory**: `frontend/dist`
4. Set **Build Command**: (leave empty - already built)
5. Add frontend environment variables
6. Update `VITE_BACKEND_URL` with your backend service URL
7. Deploy site

### Step 3: Update CORS
1. Go to backend service environment variables
2. Update `ALLOWED_ORIGINS` with your frontend URL
3. Redeploy backend service

---

## 🔧 Configuration Files

### Dockerfile (optional, for Docker deployment)
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### .env.example
```bash
DATABASE_URL=postgresql://user:pass@localhost:5432/ummah_ai
REDIS_URL=redis://localhost:6379/0
SECRET_KEY=change-me-in-production
OPENAI_API_KEY=your-key-here
ANTHROPIC_API_KEY=your-key-here
```

---

## 🚨 Important Notes

### Security
- ⚠️ Never commit API keys to repository
- ✅ Use Render environment variables for secrets
- ✅ Change default SECRET_KEY in production
- ✅ Configure CORS properly with your domain

### Performance
- 📊 Enable Redis caching for better performance
- 🔄 Use WebSocket for real-time features
- 📈 Monitor service logs and metrics

### Troubleshooting
- Check service logs in Render dashboard
- Verify environment variables are set correctly
- Ensure database connection is working
- Test API endpoints: `/health` and `/api/health`

---

## 📞 Support

### Health Check URLs
- Backend: `https://your-backend.onrender.com/health`
- API: `https://your-backend.onrender.com/api/health`
- Frontend: `https://your-frontend.onrender.com`

### Common Issues
1. **CORS errors**: Update `ALLOWED_ORIGINS` environment variable
2. **Database connection**: Check `DATABASE_URL` format
3. **Build failures**: Verify `requirements.txt` is complete
4. **WebSocket issues**: Ensure `wss://` protocol for production

---

**Created by Devin AI for @RUSTEM003**  
**Session Link**: https://app.devin.ai/sessions/7444e22f6e894eae8a6cc1ffd7873729
