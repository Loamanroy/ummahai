# UMMAH AI Platform vX Infinity Grid

🚀 **Advanced AI-driven cryptocurrency trading platform with real-time analytics, voice commands, and XR visualization**

## 📋 Project Overview

UMMAH AI Platform is a comprehensive cryptocurrency trading platform that combines:
- **AI-Powered Trading**: GPT-4o and Claude 3 integration for intelligent trading decisions
- **Real-time Analytics**: Live market data with advanced visualization
- **Voice Assistant**: RASA-powered voice commands in multiple languages
- **XR Experience**: Immersive 3D trading environment
- **Security**: Advanced threat detection and stealth trading modes

## 🏗️ Project Structure

```
UMMAH_AI_vX_INFINITY_GRID/
├── backend/                 # FastAPI backend services
│   ├── app/
│   │   ├── main.py         # Main FastAPI application
│   │   ├── core/           # Core configuration
│   │   ├── modules/        # Feature modules
│   │   ├── routers/        # API routes
│   │   └── services/       # Business logic
│   └── requirements.txt    # Python dependencies
├── frontend/               # React + TypeScript frontend
│   ├── dist/              # Built production files
│   └── src/               # Source code
├── RENDER_DEPLOYMENT_GUIDE.md  # Detailed deployment guide
└── README.md              # This file
```

## 🚀 Quick Deploy on Render.com

### 1. Backend Deployment (Web Service)

1. **Create Web Service** on Render.com
2. **Connect Repository**: https://github.com/Loamanroy/ummahai
3. **Configure Service**:
   - **Root Directory**: `backend/`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

4. **Add Environment Variables**:
```bash
DATABASE_URL=postgresql://username:password@hostname:5432/database_name
REDIS_URL=redis://hostname:6379/0
SECRET_KEY=your-super-secret-key-change-in-production
OPENAI_API_KEY=sk-your-openai-api-key-here
ANTHROPIC_API_KEY=sk-ant-your-claude-api-key-here
ALLOWED_ORIGINS=https://your-frontend-site.onrender.com
```

5. **Add PostgreSQL Add-on** from Render dashboard

### 2. Frontend Deployment (Static Site)

1. **Create Static Site** on Render.com
2. **Connect Same Repository**: https://github.com/Loamanroy/ummahai
3. **Configure Service**:
   - **Publish Directory**: `frontend/dist`
   - **Build Command**: (leave empty - already built)

4. **Add Environment Variables**:
```bash
VITE_BACKEND_URL=https://your-backend-service.onrender.com
VITE_API_BASE_URL=https://your-backend-service.onrender.com/api
VITE_WS_URL=wss://your-backend-service.onrender.com
```

### 3. Update CORS Settings

After both services are deployed:
1. Update backend `ALLOWED_ORIGINS` with your frontend URL
2. Redeploy backend service

## 🔧 Local Development

### Prerequisites
- Python 3.11+
- Node.js 18+
- PostgreSQL
- Redis

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 📊 Features

### AI Trading
- **GPT-4o Integration**: Advanced market analysis
- **Claude 3**: Risk assessment and strategy optimization
- **Quantum AI Predictor**: Advanced price prediction algorithms

### Security
- **Stealth Mode**: Anonymous trading capabilities
- **Threat Detection**: Real-time security monitoring
- **JA3 Fingerprinting**: Advanced connection analysis

### User Experience
- **Voice Commands**: Multi-language voice control
- **XR Interface**: Immersive 3D trading environment
- **Real-time Sync**: Live data across all components

## 🌐 API Endpoints

### Health Checks
- `GET /` - Root endpoint
- `GET /health` - Service health status
- `GET /api/health` - API health status

### Trading
- `GET /api/trading/status` - Trading service status
- `GET /api/v1/gpt-agents/status` - AI agents status

## 🔐 Environment Variables

### Backend Required
```bash
DATABASE_URL=postgresql://user:pass@host:5432/db
REDIS_URL=redis://host:6379/0
SECRET_KEY=your-secret-key
OPENAI_API_KEY=sk-your-openai-key
ANTHROPIC_API_KEY=sk-ant-your-claude-key
```

### Frontend Required
```bash
VITE_BACKEND_URL=https://your-backend.onrender.com
VITE_API_BASE_URL=https://your-backend.onrender.com/api
VITE_WS_URL=wss://your-backend.onrender.com
```

## 📚 Documentation

- **[Render Deployment Guide](RENDER_DEPLOYMENT_GUIDE.md)** - Complete deployment instructions
- **[Technical Requirements](TECHNICAL_REQUIREMENTS_GUIDE.md)** - Hardware and team requirements
- **[Platform Export Guide](COMPLETE_PLATFORM_EXPORT.md)** - Full platform documentation

## 🆘 Troubleshooting

### Common Issues

1. **CORS Errors**: Update `ALLOWED_ORIGINS` in backend environment variables
2. **Database Connection**: Verify `DATABASE_URL` format
3. **Build Failures**: Check `requirements.txt` completeness
4. **WebSocket Issues**: Ensure `wss://` protocol for production

### Health Check URLs
- Backend: `https://your-backend.onrender.com/health`
- API: `https://your-backend.onrender.com/api/health`
- Frontend: `https://your-frontend.onrender.com`

## 🤝 Support

For deployment issues or questions:
1. Check the [Render Deployment Guide](RENDER_DEPLOYMENT_GUIDE.md)
2. Verify all environment variables are set correctly
3. Check service logs in Render dashboard

## 📄 License

UMMAH AI Platform vX Infinity Grid - Advanced Trading Platform

---

**Created by Devin AI for @RUSTEM003**  
**Session Link**: https://app.devin.ai/sessions/7444e22f6e894eae8a6cc1ffd7873729
