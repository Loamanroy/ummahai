from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI(
    title="UMMAH AI Platform API",
    description="Advanced AI-driven cryptocurrency trading platform",
    version="2.0.0"
)

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

@app.get("/api/v1/status")
async def api_status():
    return {
        "status": "operational",
        "platform": "UMMAH AI vX Infinity Grid",
        "services": {
            "trading": "active",
            "ai_agents": "active",
            "voice_assistant": "active",
            "security": "active"
        }
    }

@app.get("/api/trading/status")
async def trading_status():
    return {
        "status": "active",
        "exchanges": ["binance", "coinbase", "kraken"],
        "ai_prediction": "enabled",
        "stealth_mode": "available"
    }

@app.get("/api/v1/gpt-agents/status")
async def gpt_agents_status():
    return {
        "status": "active",
        "models": ["gpt-4o", "claude-3-opus"],
        "voice_commands": "enabled",
        "real_time": "active"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", 8000)))
