import { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconDashboard({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}

function IconComponents({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
}

function IconReports({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 .49-4.9L1 10" />
      <polyline points="12 7 12 12 15 15" />
    </svg>
  )
}

function IconSettings({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

function IconCpu({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  )
}

function IconGpu({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="22" height="12" rx="2" />
      <path d="M6 12h4" />
      <circle cx="17" cy="12" r="2" />
      <line x1="5" y1="6" x2="5" y2="3" />
      <line x1="10" y1="6" x2="10" y2="3" />
      <line x1="15" y1="6" x2="15" y2="3" />
      <line x1="20" y1="6" x2="20" y2="3" />
    </svg>
  )
}

function IconMemory({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="10" rx="2" />
      <line x1="7" y1="7" x2="7" y2="17" />
      <line x1="12" y1="7" x2="12" y2="17" />
      <line x1="17" y1="7" x2="17" y2="17" />
      <line x1="6" y1="3" x2="6" y2="7" />
      <line x1="10" y1="3" x2="10" y2="7" />
      <line x1="14" y1="3" x2="14" y2="7" />
      <line x1="18" y1="3" x2="18" y2="7" />
    </svg>
  )
}

function IconStorage({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

function IconFan({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.5 2.8-1.3 3.8L12 12" />
      <path d="M22 12a4 4 0 0 1-4 4c-1.5 0-2.8-.5-3.8-1.3L12 12" />
      <path d="M12 22a4 4 0 0 1-4-4c0-1.5.5-2.8 1.3-3.8L12 12" />
      <path d="M2 12a4 4 0 0 1 4-4c1.5 0 2.8.5 3.8 1.3L12 12" />
    </svg>
  )
}

function IconCheck({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function IconBell({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

function IconTrendUp({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

function IconTrendDown({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
      <polyline points="17 18 23 18 23 12" />
    </svg>
  )
}

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

// Asclepius logo — shield with heartbeat line
function AsclepiusLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 4L6 12V26C6 35.9 14.1 44.5 24 47C33.9 44.5 42 35.9 42 26V12L24 4Z"
        fill="#3B82F6"
        fillOpacity="0.15"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <polyline
        points="10,27 15,27 18,18 21,34 25,22 28,30 31,27 38,27"
        stroke="#22C55E"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

// ── Shared primitives ─────────────────────────────────────────────────────────

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[14px] border border-[#334155] bg-[#1E293B] ${className}`}
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
    >
      {children}
    </div>
  )
}

function HealthBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[#94A3B8] font-medium">{label}</span>
        <span className="text-sm font-semibold text-[#F8FAFC] font-mono">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-[#0F172A] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

type AlertSeverity = 'warning' | 'critical' | 'healthy'

function AlertDot({ severity }: { severity: AlertSeverity }) {
  const colors: Record<AlertSeverity, string> = {
    warning: '#FACC15',
    critical: '#EF4444',
    healthy: '#22C55E',
  }
  return (
    <div
      className="w-2 h-2 rounded-full flex-shrink-0 mt-0.5"
      style={{ backgroundColor: colors[severity] }}
    />
  )
}

// Custom tooltip for recharts
function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number; color: string }[]; label?: string }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-[8px] border border-[#334155] bg-[#1E293B] p-3 text-xs shadow-xl">
      <p className="text-[#94A3B8] mb-2 font-medium">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
          <span className="text-[#94A3B8]">{p.name}:</span>
          <span className="text-[#F8FAFC] font-semibold">{p.value}°C</span>
        </div>
      ))}
    </div>
  )
}

// Circular progress (dashboard)
function CircularProgress({ value, size = 140 }: { value: number; size?: number }) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (value / 100) * circumference
  const center = size / 2
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={center} cy={center} r={radius} fill="none" stroke="#1E293B" strokeWidth="10" />
      <circle
        cx={center} cy={center} r={radius}
        fill="none" stroke="#3B82F6" strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: 'stroke-dashoffset 0.8s ease' }}
      />
    </svg>
  )
}

// Inline mini donut for component cards
function MiniDonut({ value, color, size = 52 }: { value: number; color: string; size?: number }) {
  const r = 20
  const c = 2 * Math.PI * r
  const offset = c - (value / 100) * c
  const cx = size / 2
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={cx} cy={cx} r={r} fill="none" stroke="#0F172A" strokeWidth="5" />
      <circle
        cx={cx} cy={cx} r={r}
        fill="none" stroke={color} strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
      />
    </svg>
  )
}

// ── Nav items ─────────────────────────────────────────────────────────────────

type NavId =
  | 'dashboard'
  | 'components'
  | 'cpu-details'
  | 'gpu-details'
  | 'ram-details'
  | 'storage-details'
  | 'cooling-details'
  | 'reports'
  | 'settings'

interface NavItem { label: string; icon: React.ReactNode; id: NavId }

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: <IconDashboard />, id: 'dashboard' },
  { label: 'Components', icon: <IconComponents />, id: 'components' },
  { label: 'Reports', icon: <IconReports />, id: 'reports' },
  { label: 'Settings', icon: <IconSettings />, id: 'settings' },
]

// ── Dashboard data ────────────────────────────────────────────────────────────

const performanceData = [
  { time: '00:00', cpu: 62, gpu: 58 },
  { time: '02:00', cpu: 65, gpu: 60 },
  { time: '04:00', cpu: 61, gpu: 57 },
  { time: '06:00', cpu: 66, gpu: 62 },
  { time: '08:00', cpu: 70, gpu: 65 },
  { time: '10:00', cpu: 68, gpu: 63 },
  { time: '12:00', cpu: 72, gpu: 68 },
  { time: '14:00', cpu: 75, gpu: 70 },
  { time: '16:00', cpu: 71, gpu: 67 },
  { time: '18:00', cpu: 69, gpu: 64 },
  { time: '20:00', cpu: 68, gpu: 63 },
  { time: '22:00', cpu: 67, gpu: 62 },
]

const dashboardAlerts: { text: string; severity: AlertSeverity; time: string }[] = [
  { text: 'CPU temperature rising slightly', severity: 'warning', time: '2 min ago' },
  { text: 'High RAM usage detected', severity: 'warning', time: '5 min ago' },
  { text: 'Cooling system operating normally', severity: 'healthy', time: '12 min ago' },
  { text: 'No storage anomalies detected', severity: 'healthy', time: '18 min ago' },
]

const recommendations = [
  { text: 'Close unnecessary background applications', done: true },
  { text: 'Monitor CPU temperature closely', done: true },
  { text: 'Increase fan speed to reduce heat', done: false },
  { text: 'Clean cooling vents and heatsink', done: false },
]

// ── Dashboard metric card ─────────────────────────────────────────────────────

interface MetricCardProps {
  icon: React.ReactNode
  label: string
  value: string
  unit: string
  status: string
  statusColor: string
  trend: 'up' | 'down'
  trendColor: string
}

function MetricCard({ icon, label, value, unit, status, statusColor, trend, trendColor }: MetricCardProps) {
  return (
    <Card className="p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-[#94A3B8]">{icon}</div>
        <div className="flex items-center gap-1" style={{ color: trendColor }}>
          {trend === 'up' ? <IconTrendUp /> : <IconTrendDown />}
          <span className="text-xs font-medium">{trend === 'up' ? '+2' : '-1'}</span>
        </div>
      </div>
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-[#F8FAFC] tracking-tight">{value}</span>
          <span className="text-base text-[#94A3B8] font-medium">{unit}</span>
        </div>
        <p className="text-xs text-[#94A3B8] mt-0.5 font-medium">{label}</p>
      </div>
      <div
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold w-fit"
        style={{ backgroundColor: `${statusColor}18`, color: statusColor }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusColor }} />
        {status}
      </div>
    </Card>
  )
}

// ── Shared Sidebar + Header shell ─────────────────────────────────────────────

interface ShellProps {
  activeNav: NavId
  onNav: (id: NavId) => void
  headerTitle: string
  headerSub: string
  breadcrumb?: { label: string; navId: NavId }[]
  children: React.ReactNode
}

// Which sidebar nav item should be highlighted for each page
const sidebarHighlight: Record<NavId, NavId> = {
  dashboard: 'dashboard',
  components: 'components',
  'cpu-details': 'components',
  'gpu-details': 'components',
  'ram-details': 'components',
  'storage-details': 'components',
  'cooling-details': 'components',
  reports: 'reports',
  settings: 'settings',
}

function Shell({ activeNav, onNav, headerTitle, headerSub, breadcrumb, children }: ShellProps) {
  return (
    <div className="flex h-screen bg-[#0F172A] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Sidebar */}
      <aside className="w-56 flex-shrink-0 flex flex-col bg-[#0F172A] border-r border-[#1E293B] py-6">
        <div className="flex items-center gap-3 px-5 mb-10">
          <AsclepiusLogo size={36} />
          <div>
            <p className="text-[15px] font-bold text-[#F8FAFC] leading-tight tracking-tight">Asclepius</p>
            <p className="text-[10px] text-[#94A3B8] leading-tight tracking-wide uppercase font-medium">Predict · Prevent · Protect</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1 px-3">
          {navItems.map((item) => {
            const isActive = sidebarHighlight[activeNav] === item.id
            return (
              <button
                key={item.id}
                onClick={() => onNav(item.id)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-all duration-150 w-full text-left"
                style={{
                  backgroundColor: isActive ? '#1E3A5F' : 'transparent',
                  color: isActive ? '#3B82F6' : '#94A3B8',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1E293B'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#CBD5E1'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent'
                    ;(e.currentTarget as HTMLButtonElement).style.color = '#94A3B8'
                  }
                }}
              >
                {item.icon}
                {item.label}
              </button>
            )
          })}
        </nav>
        <div className="flex-1" />
        <div className="px-5 mt-4">
          <div className="rounded-[10px] bg-[#1E293B] border border-[#334155] p-3">
            <p className="text-[11px] text-[#94A3B8] font-medium mb-1">System Uptime</p>
            <p className="text-[13px] font-bold text-[#F8FAFC] font-mono">14d 7h 22m</p>
            <div className="flex items-center gap-1.5 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" style={{ boxShadow: '0 0 5px #22C55E' }} />
              <span className="text-[11px] text-[#22C55E] font-medium">All systems nominal</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top nav */}
        <header className="flex items-center justify-between px-7 py-4 border-b border-[#1E293B] flex-shrink-0">
          <div>
            {breadcrumb && (
              <div className="flex items-center gap-1.5 mb-1">
                {breadcrumb.map((crumb, i) => (
                  <span key={crumb.navId} className="flex items-center gap-1.5">
                    {i > 0 && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    )}
                    <button
                      onClick={() => onNav(crumb.navId)}
                      className="text-[11px] font-medium transition-colors"
                      style={{ color: i < breadcrumb.length - 1 ? '#3B82F6' : '#94A3B8' }}
                    >
                      {crumb.label}
                    </button>
                  </span>
                ))}
              </div>
            )}
            <h1 className="text-lg font-semibold text-[#F8FAFC] tracking-tight">{headerTitle}</h1>
            <p className="text-xs text-[#94A3B8]">{headerSub}</p>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#22C55E33] bg-[#22C55E12]">
              <div className="w-2 h-2 rounded-full bg-[#22C55E]" style={{ boxShadow: '0 0 6px #22C55E80' }} />
              <span className="text-[#22C55E] text-xs font-semibold">System Healthy</span>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-[#475569] font-medium">Last Updated</p>
              <p className="text-xs text-[#94A3B8] font-mono">2 min ago · 14:32 UTC</p>
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1E293B] border border-[#334155] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#475569] transition-colors relative">
              <IconBell />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#FACC15] rounded-full text-[8px] font-bold text-[#0F172A] flex items-center justify-center">2</span>
            </button>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#6366F1] flex items-center justify-center text-xs font-bold text-white">AG</div>
              <div>
                <p className="text-xs font-semibold text-[#F8FAFC] leading-tight">Abhirva Gade</p>
                <p className="text-[10px] text-[#94A3B8] leading-tight">Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto px-7 py-6">
          {children}
        </main>
      </div>
    </div>
  )
}

// ── Dashboard page ────────────────────────────────────────────────────────────

function DashboardPage() {
  const alertSeverityLabel: Record<AlertSeverity, string> = {
    warning: 'Warning',
    critical: 'Critical',
    healthy: 'Healthy',
  }

  return (
    <div className="space-y-5">
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-5">
        {/* System Health */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest mb-1">Overall Health</p>
              <h2 className="text-base font-semibold text-[#F8FAFC]">System Health Score</h2>
            </div>
            <div className="px-3 py-1 rounded-full bg-[#22C55E18] border border-[#22C55E33] text-[#22C55E] text-xs font-semibold">Healthy</div>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative flex-shrink-0">
              <CircularProgress value={91} size={140} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[#F8FAFC] tracking-tight">91</span>
                <span className="text-xs text-[#94A3B8] font-medium">/100</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-sm text-[#F8FAFC] font-medium">System operating normally.</p>
                <p className="text-xs text-[#94A3B8] mt-1">All core components within safe thresholds.</p>
              </div>
              <div className="space-y-2">
                {[{ label: 'CPU', val: 92 }, { label: 'GPU', val: 86 }, { label: 'RAM', val: 90 }].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-xs text-[#94A3B8] w-10 font-medium">{item.label}</span>
                    <div className="flex-1 h-1.5 bg-[#0F172A] rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-[#3B82F6]" style={{ width: `${item.val}%` }} />
                    </div>
                    <span className="text-[11px] text-[#94A3B8] w-7 text-right font-mono">{item.val}%</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#475569]">Last updated: 2 minutes ago</p>
            </div>
          </div>
        </Card>

        {/* Failure Prediction */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest mb-1">AI Prediction</p>
              <h2 className="text-base font-semibold text-[#F8FAFC]">Failure Risk Analysis</h2>
            </div>
            <div className="px-3 py-1 rounded-full bg-[#22C55E18] border border-[#22C55E33] text-[#22C55E] text-xs font-semibold">Healthy</div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-6">
              <div className="relative">
                <svg width="110" height="110" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="55" cy="55" r="46" fill="none" stroke="#0F172A" strokeWidth="9" />
                  <circle cx="55" cy="55" r="46" fill="none" stroke="#22C55E" strokeWidth="9" strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 46} strokeDashoffset={2 * Math.PI * 46 * (1 - 0.12)} />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-[#F8FAFC] tracking-tight">12%</span>
                  <span className="text-[10px] text-[#94A3B8]">Failure Risk</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <div>
                  <p className="text-[11px] text-[#94A3B8] uppercase tracking-widest font-medium mb-1">Prediction</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                    <span className="text-[15px] font-bold text-[#F8FAFC]">Healthy</span>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] text-[#94A3B8] uppercase tracking-widest font-medium mb-1">Confidence</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-[#0F172A] rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-[#3B82F6]" style={{ width: '96%' }} />
                    </div>
                    <span className="text-[13px] font-bold text-[#F8FAFC] font-mono">96%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-1">
              {[{ label: 'Thermal', risk: 'Low', color: '#22C55E' }, { label: 'Hardware', risk: 'Low', color: '#22C55E' }, { label: 'Memory', risk: 'Medium', color: '#FACC15' }].map((item) => (
                <div key={item.label} className="rounded-[10px] bg-[#0F172A] border border-[#334155] px-3 py-2.5 text-center">
                  <p className="text-[10px] text-[#94A3B8] font-medium mb-1">{item.label}</p>
                  <p className="text-xs font-bold" style={{ color: item.color }}>{item.risk}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-4 gap-5">
        <MetricCard icon={<IconCpu />} label="CPU Temperature" value="68" unit="°C" status="Stable" statusColor="#22C55E" trend="up" trendColor="#FACC15" />
        <MetricCard icon={<IconGpu />} label="GPU Temperature" value="64" unit="°C" status="Stable" statusColor="#22C55E" trend="down" trendColor="#22C55E" />
        <MetricCard icon={<IconMemory />} label="RAM Usage" value="72" unit="%" status="Moderate" statusColor="#FACC15" trend="up" trendColor="#FACC15" />
        <MetricCard icon={<IconStorage />} label="Storage Health" value="97" unit="%" status="Excellent" statusColor="#22C55E" trend="down" trendColor="#22C55E" />
      </div>

      {/* Row 3 */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest mb-1">24h Overview</p>
            <h2 className="text-base font-semibold text-[#F8FAFC]">System Performance</h2>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2"><div className="w-5 h-0.5 rounded bg-[#3B82F6]" /><span className="text-[#94A3B8] font-medium">CPU Temp</span></div>
            <div className="flex items-center gap-2"><div className="w-5 h-0.5 rounded bg-[#A78BFA]" /><span className="text-[#94A3B8] font-medium">GPU Temp</span></div>
            <div className="px-2.5 py-1 rounded-md bg-[#0F172A] border border-[#334155] text-[#94A3B8]">Today</div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={performanceData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
            <XAxis dataKey="time" tick={{ fill: '#94A3B8', fontSize: 11, fontFamily: 'JetBrains Mono' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#94A3B8', fontSize: 11, fontFamily: 'JetBrains Mono' }} axisLine={false} tickLine={false} domain={[50, 85]} tickFormatter={(v) => `${v}°`} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="cpu" name="CPU" stroke="#3B82F6" strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: '#3B82F6', stroke: '#0F172A', strokeWidth: 2 }} />
            <Line type="monotone" dataKey="gpu" name="GPU" stroke="#A78BFA" strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: '#A78BFA', stroke: '#0F172A', strokeWidth: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Row 4 */}
      <div className="grid grid-cols-2 gap-5">
        <Card className="p-6">
          <div className="mb-5">
            <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest mb-1">Status</p>
            <h2 className="text-base font-semibold text-[#F8FAFC]">Component Health</h2>
          </div>
          <div className="flex flex-col gap-4">
            <HealthBar label="CPU" value={92} color="#3B82F6" />
            <HealthBar label="GPU" value={86} color="#A78BFA" />
            <HealthBar label="RAM" value={90} color="#22C55E" />
            <HealthBar label="Storage" value={97} color="#22C55E" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest mb-1">Monitoring</p>
              <h2 className="text-base font-semibold text-[#F8FAFC]">Recent Alerts</h2>
            </div>
            <span className="text-xs text-[#94A3B8] bg-[#0F172A] border border-[#334155] px-2.5 py-1 rounded-md font-mono">4 events</span>
          </div>
          <div className="flex flex-col gap-3">
            {dashboardAlerts.map((alert, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-[10px] bg-[#0F172A] border border-[#334155]">
                <AlertDot severity={alert.severity} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#CBD5E1] font-medium leading-snug">{alert.text}</p>
                  <p className="text-[10px] text-[#475569] mt-0.5 font-mono">{alert.time}</p>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ color: alert.severity === 'healthy' ? '#22C55E' : alert.severity === 'warning' ? '#FACC15' : '#EF4444', backgroundColor: alert.severity === 'healthy' ? '#22C55E18' : alert.severity === 'warning' ? '#FACC1518' : '#EF444418' }}>
                  {alert.severity === 'healthy' ? 'Healthy' : alert.severity === 'warning' ? 'Warning' : 'Critical'}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Row 5 */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest mb-1">AI Insights</p>
            <h2 className="text-base font-semibold text-[#F8FAFC]">Recommendations</h2>
          </div>
          <div className="text-[11px] text-[#94A3B8] bg-[#0F172A] border border-[#334155] px-2.5 py-1 rounded-md font-mono">
            {recommendations.filter((r) => r.done).length}/{recommendations.length} completed
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {recommendations.map((rec, i) => (
            <div key={i} className="flex items-center gap-3 p-3.5 rounded-[10px] border transition-colors"
              style={{ backgroundColor: rec.done ? '#22C55E0C' : '#0F172A', borderColor: rec.done ? '#22C55E33' : '#334155' }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: rec.done ? '#22C55E22' : '#1E293B', color: rec.done ? '#22C55E' : '#475569', border: `1.5px solid ${rec.done ? '#22C55E55' : '#334155'}` }}>
                <IconCheck size={12} />
              </div>
              <span className="text-sm font-medium leading-snug"
                style={{ color: rec.done ? '#94A3B8' : '#CBD5E1', textDecoration: rec.done ? 'line-through' : 'none' }}>
                {rec.text}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// ── Components page ───────────────────────────────────────────────────────────

interface ComponentDef {
  id: string
  name: string
  icon: React.ReactNode
  iconLarge: React.ReactNode
  healthScore: number
  statusLabel: string
  statusColor: string
  stats: { label: string; value: string }[]
}

const componentDefs: ComponentDef[] = [
  {
    id: 'cpu',
    name: 'CPU',
    icon: <IconCpu size={18} />,
    iconLarge: <IconCpu size={36} />,
    healthScore: 92,
    statusLabel: 'Healthy',
    statusColor: '#22C55E',
    stats: [
      { label: 'Temperature', value: '68°C' },
      { label: 'Usage', value: '54%' },
    ],
  },
  {
    id: 'gpu',
    name: 'GPU',
    icon: <IconGpu size={18} />,
    iconLarge: <IconGpu size={36} />,
    healthScore: 89,
    statusLabel: 'Healthy',
    statusColor: '#22C55E',
    stats: [
      { label: 'Temperature', value: '64°C' },
      { label: 'Usage', value: '48%' },
    ],
  },
  {
    id: 'ram',
    name: 'RAM',
    icon: <IconMemory size={18} />,
    iconLarge: <IconMemory size={36} />,
    healthScore: 90,
    statusLabel: 'Healthy',
    statusColor: '#22C55E',
    stats: [
      { label: 'Memory Used', value: '11.4 GB / 16 GB' },
      { label: 'Usage', value: '71%' },
    ],
  },
  {
    id: 'storage',
    name: 'Storage',
    icon: <IconStorage size={18} />,
    iconLarge: <IconStorage size={36} />,
    healthScore: 97,
    statusLabel: 'Excellent',
    statusColor: '#22C55E',
    stats: [
      { label: 'Capacity', value: '420 GB / 1 TB' },
    ],
  },
  {
    id: 'cooling',
    name: 'Cooling',
    icon: <IconFan size={18} />,
    iconLarge: <IconFan size={36} />,
    healthScore: 85,
    statusLabel: 'Stable',
    statusColor: '#22C55E',
    stats: [
      { label: 'Fan Speed', value: '2200 RPM' },
      { label: 'Efficiency', value: '84%' },
    ],
  },
]

const componentEvents: { text: string; severity: AlertSeverity; time: string }[] = [
  { text: 'CPU temperature increased slightly', severity: 'warning', time: '3 min ago' },
  { text: 'GPU usage normalized after load spike', severity: 'healthy', time: '8 min ago' },
  { text: 'RAM usage exceeded 70% threshold', severity: 'warning', time: '11 min ago' },
  { text: 'Storage integrity scan completed', severity: 'healthy', time: '22 min ago' },
  { text: 'Cooling system operating normally', severity: 'healthy', time: '34 min ago' },
]

const healthBarColors: Record<string, string> = {
  cpu: '#3B82F6',
  gpu: '#A78BFA',
  ram: '#22C55E',
  storage: '#22C55E',
  cooling: '#22C55E',
}

// A single component card with hover lift + blue glow + arrow slide
function ComponentCard({ comp, onClick }: { comp: ComponentDef; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="rounded-[14px] border cursor-pointer select-none"
      style={{
        backgroundColor: '#1E293B',
        borderColor: hovered ? '#3B82F6' : '#334155',
        boxShadow: hovered
          ? '0 12px 40px rgba(59,130,246,0.18), 0 4px 16px rgba(0,0,0,0.35)'
          : '0 4px 24px rgba(0,0,0,0.25)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="p-6">
        {/* Top row: icon swatch + health score donut */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-14 h-14 rounded-[12px] flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#0F172A', color: '#3B82F6', border: '1px solid #334155' }}
          >
            {comp.iconLarge}
          </div>
          {/* Mini donut + score */}
          <div className="flex flex-col items-center gap-0.5">
            <div className="relative">
              <MiniDonut value={comp.healthScore} color={comp.statusColor} size={52} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#F8FAFC] font-mono">{comp.healthScore}</span>
              </div>
            </div>
            <span className="text-[10px] text-[#94A3B8] font-medium">Health</span>
          </div>
        </div>

        {/* Component name */}
        <h3 className="text-[17px] font-bold text-[#F8FAFC] tracking-tight mb-1">{comp.name}</h3>

        {/* Stats */}
        <div className="flex flex-col gap-2 mb-4">
          {comp.stats.map((s) => (
            <div key={s.label} className="flex items-center justify-between">
              <span className="text-xs text-[#94A3B8] font-medium">{s.label}</span>
              <span className="text-xs font-semibold text-[#CBD5E1] font-mono">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Status badge */}
        <div className="mb-5">
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: `${comp.statusColor}18`, color: comp.statusColor }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: comp.statusColor }} />
            {comp.statusLabel}
          </div>
        </div>

        {/* Footer: click hint + arrow */}
        <div
          className="flex items-center justify-between pt-4 border-t border-[#334155]"
        >
          <span className="text-[11px] text-[#475569] font-medium">Click to view detailed metrics</span>
          <div
            className="text-[#3B82F6] transition-transform duration-200"
            style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}
          >
            <IconArrowRight size={15} />
          </div>
        </div>
      </div>
    </div>
  )
}

function ComponentsPage({ onNav }: { onNav: (id: NavId) => void }) {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-[#F8FAFC] tracking-tight mb-1">Hardware Components</h2>
        <p className="text-sm text-[#94A3B8]">
          Select any hardware component to view its health, live telemetry, and predictive analytics.
        </p>
      </div>

      {/* Component grid — 2-col, last card spans if odd */}
      <div className="grid grid-cols-2 gap-5">
        {componentDefs.map((comp) => (
          <ComponentCard
            key={comp.id}
            comp={comp}
            onClick={() => onNav(`${comp.id}-details` as NavId)}
          />
        ))}
      </div>

      {/* Bottom section: health summary + events */}
      <div className="grid grid-cols-[1fr_320px] gap-5">
        {/* Overall Component Health */}
        <Card className="p-6">
          <div className="mb-5">
            <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest mb-1">Summary</p>
            <h2 className="text-base font-semibold text-[#F8FAFC]">Overall Component Health</h2>
          </div>
          <div className="flex flex-col gap-4">
            {componentDefs.map((comp) => (
              <HealthBar
                key={comp.id}
                label={comp.name}
                value={comp.healthScore}
                color={healthBarColors[comp.id]}
              />
            ))}
          </div>
        </Card>

        {/* Recent Component Events */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest mb-1">Log</p>
              <h2 className="text-base font-semibold text-[#F8FAFC]">Recent Events</h2>
            </div>
            <span className="text-xs text-[#94A3B8] bg-[#0F172A] border border-[#334155] px-2.5 py-1 rounded-md font-mono">
              5 events
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {componentEvents.map((evt, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-[10px] bg-[#0F172A] border border-[#334155]">
                <AlertDot severity={evt.severity} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-[#CBD5E1] font-medium leading-snug">{evt.text}</p>
                  <p className="text-[10px] text-[#475569] mt-0.5 font-mono">{evt.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

// ── Generic component detail page ────────────────────────────────────────────

interface DetailStatCard {
  label: string
  value: string
  unit?: string
  statusLabel: string
  statusColor: string
}

interface DetailSummaryRow {
  label: string
  value: string
  valueColor?: string
}

interface ComponentDetailConfig {
  pageTitle: string
  pageSubtitle: string
  icon: React.ReactNode
  statCards: [DetailStatCard, DetailStatCard, DetailStatCard]
  prediction: { value: string; risk: string; riskColor: string; riskLabel: string }
  chart: {
    title: string
    legendLabel: string
    safeRange: string
    lineColor: string
    gradientId: string
    data: { time: string; val: number }[]
    domain: [number, number]
    tickFormatter: (v: number) => string
    tooltipUnit: string
  }
  healthScore: number
  healthStatus: string
  healthStatusColor: string
  summaryRows: DetailSummaryRow[]
  recommendations: { text: string; done: boolean }[]
  infoNote: string
}

// Shared sub-components reused across all five detail pages

function SummaryRow({ label, value, valueColor = '#F8FAFC' }: { label: string; value: string; valueColor?: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-[#334155] last:border-0">
      <span className="text-sm text-[#94A3B8] font-medium">{label}</span>
      <span className="text-sm font-semibold font-mono" style={{ color: valueColor }}>{value}</span>
    </div>
  )
}

function StatCard({
  label, value, unit, statusLabel, statusColor, icon,
}: DetailStatCard & { icon: React.ReactNode }) {
  return (
    <Card className="p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest">{label}</span>
        <div className="text-[#475569]">{icon}</div>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-[2rem] font-bold text-[#F8FAFC] tracking-tight leading-none">{value}</span>
        {unit && <span className="text-base text-[#94A3B8] font-medium">{unit}</span>}
      </div>
      <div
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold w-fit"
        style={{ backgroundColor: `${statusColor}18`, color: statusColor }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusColor }} />
        {statusLabel}
      </div>
    </Card>
  )
}

function ComponentDetailPage({ cfg }: { cfg: ComponentDetailConfig }) {
  const { chart } = cfg

  // Generic tooltip — parameterised by unit
  function DetailTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
    if (!active || !payload?.length) return null
    return (
      <div className="rounded-[8px] border border-[#334155] bg-[#1E293B] p-3 text-xs shadow-xl">
        <p className="text-[#94A3B8] mb-1.5 font-medium font-mono">{label}</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: chart.lineColor }} />
          <span className="text-[#94A3B8]">{chart.legendLabel}:</span>
          <span className="text-[#F8FAFC] font-semibold">{payload[0].value}{chart.tooltipUnit}</span>
        </div>
      </div>
    )
  }

  const doneCount = cfg.recommendations.filter((r) => r.done).length

  return (
    <div className="space-y-5">
      {/* Page header */}
      <div className="mb-1">
        <h2 className="text-2xl font-bold text-[#F8FAFC] tracking-tight mb-1">{cfg.pageTitle}</h2>
        <p className="text-sm text-[#94A3B8]">{cfg.pageSubtitle}</p>
      </div>

      {/* Top row — 3 stat cards + prediction */}
      <div className="grid grid-cols-4 gap-5">
        {cfg.statCards.map((card) => (
          <StatCard key={card.label} {...card} icon={cfg.icon} />
        ))}

        {/* Prediction card */}
        <Card className="p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest">Prediction</span>
            <div className="text-[#475569]">{cfg.icon}</div>
          </div>
          <div>
            <div className="text-[2rem] font-bold text-[#F8FAFC] tracking-tight leading-none mb-1">
              {cfg.prediction.value}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#94A3B8] font-medium">Failure Risk</span>
              <span className="text-xs font-bold font-mono" style={{ color: cfg.prediction.riskColor }}>
                {cfg.prediction.risk}
              </span>
            </div>
          </div>
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold w-fit"
            style={{ backgroundColor: `${cfg.prediction.riskColor}18`, color: cfg.prediction.riskColor }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.prediction.riskColor }} />
            {cfg.prediction.riskLabel}
          </div>
        </Card>
      </div>

      {/* Middle — trend chart */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest mb-1">24h Telemetry</p>
            <h2 className="text-base font-semibold text-[#F8FAFC]">{chart.title}</h2>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-5 h-0.5 rounded" style={{ backgroundColor: chart.lineColor }} />
              <span className="text-[#94A3B8] font-medium">{chart.legendLabel}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0F172A] border border-[#334155]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
              <span className="text-[#94A3B8]">Safe: {chart.safeRange}</span>
            </div>
            <div className="px-2.5 py-1 rounded-md bg-[#0F172A] border border-[#334155] text-[#94A3B8]">
              Today
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={chart.data} margin={{ top: 5, right: 8, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id={chart.gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chart.lineColor} stopOpacity={0.15} />
                <stop offset="95%" stopColor={chart.lineColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
            <XAxis
              dataKey="time"
              tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }}
              axisLine={false}
              tickLine={false}
              interval={2}
            />
            <YAxis
              tick={{ fill: '#94A3B8', fontSize: 10, fontFamily: 'JetBrains Mono' }}
              axisLine={false}
              tickLine={false}
              domain={chart.domain}
              tickFormatter={chart.tickFormatter}
            />
            <Tooltip content={<DetailTooltip />} />
            <Line
              type="monotone"
              dataKey="val"
              stroke={chart.lineColor}
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: chart.lineColor, stroke: '#0F172A', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Bottom row — health summary + recommendations */}
      <div className="grid grid-cols-2 gap-5">
        {/* Health Summary */}
        <Card className="p-6">
          <div className="mb-4">
            <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest mb-1">Diagnostics</p>
            <h2 className="text-base font-semibold text-[#F8FAFC]">{cfg.pageTitle.replace(' Overview', '')} Health Summary</h2>
          </div>
          <div className="flex items-center gap-5 mb-5 p-4 rounded-[10px] bg-[#0F172A] border border-[#334155]">
            <div className="relative flex-shrink-0">
              <svg width="72" height="72" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="36" cy="36" r="28" fill="none" stroke="#1E293B" strokeWidth="6" />
                <circle
                  cx="36" cy="36" r="28"
                  fill="none"
                  stroke={cfg.healthStatusColor}
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 28}
                  strokeDashoffset={2 * Math.PI * 28 * (1 - cfg.healthScore / 100)}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-base font-bold text-[#F8FAFC] font-mono">{cfg.healthScore}%</span>
              </div>
            </div>
            <div>
              <p className="text-[11px] text-[#94A3B8] uppercase tracking-widest font-medium mb-0.5">Health Score</p>
              <p className="text-xl font-bold text-[#F8FAFC] tracking-tight">{cfg.healthScore} / 100</p>
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold mt-2"
                style={{ backgroundColor: `${cfg.healthStatusColor}18`, color: cfg.healthStatusColor }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.healthStatusColor }} />
                {cfg.healthStatus}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {cfg.summaryRows.map((row) => (
              <SummaryRow key={row.label} {...row} />
            ))}
          </div>
        </Card>

        {/* Recommendations */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-xs text-[#94A3B8] font-medium uppercase tracking-widest mb-1">AI Insights</p>
              <h2 className="text-base font-semibold text-[#F8FAFC]">Recommendations</h2>
            </div>
            <div className="text-[11px] text-[#94A3B8] bg-[#0F172A] border border-[#334155] px-2.5 py-1 rounded-md font-mono">
              {doneCount}/{cfg.recommendations.length} done
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {cfg.recommendations.map((rec, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-[10px] border"
                style={{
                  backgroundColor: rec.done ? '#22C55E0C' : '#0F172A',
                  borderColor: rec.done ? '#22C55E33' : '#334155',
                }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: rec.done ? '#22C55E22' : '#1E293B',
                    color: rec.done ? '#22C55E' : '#475569',
                    border: `1.5px solid ${rec.done ? '#22C55E55' : '#334155'}`,
                  }}
                >
                  <IconCheck size={12} />
                </div>
                <span
                  className="text-sm font-medium leading-snug"
                  style={{
                    color: rec.done ? '#94A3B8' : '#CBD5E1',
                    textDecoration: rec.done ? 'line-through' : 'none',
                  }}
                >
                  {rec.text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 p-3.5 rounded-[10px] bg-[#1E3A5F] border border-[#3B82F640]">
            <p className="text-xs text-[#93C5FD] font-medium leading-relaxed">{cfg.infoNote}</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

// ── Per-component configs ─────────────────────────────────────────────────────

function makeTrend(values: number[]): { time: string; val: number }[] {
  return values.map((val, i) => ({ time: `${String(i).padStart(2, '0')}:00`, val }))
}

const cpuConfig: ComponentDetailConfig = {
  pageTitle: 'CPU Overview',
  pageSubtitle: 'Detailed health, telemetry, and predictive analytics for the processor.',
  icon: <IconCpu size={16} />,
  statCards: [
    { label: 'Current Temperature', value: '68', unit: '°C', statusLabel: 'Normal', statusColor: '#22C55E' },
    { label: 'CPU Usage', value: '54', unit: '%', statusLabel: 'Moderate Load', statusColor: '#FACC15' },
    { label: 'Health Score', value: '92', unit: '%', statusLabel: 'Healthy', statusColor: '#22C55E' },
  ],
  prediction: { value: 'Normal', risk: '12%', riskColor: '#22C55E', riskLabel: 'Low Risk' },
  chart: {
    title: 'CPU Temperature Trend',
    legendLabel: 'CPU Temperature',
    safeRange: '50–80°C',
    lineColor: '#3B82F6',
    gradientId: 'cpuGrad',
    data: makeTrend([61, 63, 60, 62, 59, 61, 64, 67, 70, 72, 69, 68, 71, 73, 68, 66, 67, 70, 68, 65, 64, 66, 67, 65]),
    domain: [50, 85],
    tickFormatter: (v) => `${v}°`,
    tooltipUnit: '°C',
  },
  healthScore: 92,
  healthStatus: 'Healthy',
  healthStatusColor: '#22C55E',
  summaryRows: [
    { label: 'Current Status', value: 'Healthy', valueColor: '#22C55E' },
    { label: 'Predicted Condition', value: 'Normal' },
    { label: 'Thermal Condition', value: 'Stable' },
    { label: 'Last Checked', value: '2 minutes ago', valueColor: '#94A3B8' },
  ],
  recommendations: [
    { text: 'Reduce unnecessary background tasks', done: true },
    { text: 'Monitor CPU temperature during heavy workloads', done: true },
    { text: 'Ensure proper cooling airflow around the case', done: false },
    { text: 'Clean cooling vents and heatsink regularly', done: false },
  ],
  infoNote: 'CPU is operating within safe thermal limits. Continue monitoring during sustained workloads above 80% usage.',
}

const gpuConfig: ComponentDetailConfig = {
  pageTitle: 'GPU Overview',
  pageSubtitle: 'Detailed health, telemetry, and predictive analytics for the graphics processor.',
  icon: <IconGpu size={16} />,
  statCards: [
    { label: 'Current Temperature', value: '64', unit: '°C', statusLabel: 'Normal', statusColor: '#22C55E' },
    { label: 'GPU Usage', value: '48', unit: '%', statusLabel: 'Moderate Load', statusColor: '#FACC15' },
    { label: 'Health Score', value: '89', unit: '%', statusLabel: 'Healthy', statusColor: '#22C55E' },
  ],
  prediction: { value: 'Normal', risk: '14%', riskColor: '#22C55E', riskLabel: 'Low Risk' },
  chart: {
    title: 'GPU Temperature Trend',
    legendLabel: 'GPU Temperature',
    safeRange: '45–85°C',
    lineColor: '#A78BFA',
    gradientId: 'gpuGrad',
    data: makeTrend([56, 57, 55, 58, 54, 56, 60, 63, 66, 68, 65, 64, 67, 69, 65, 62, 63, 66, 64, 61, 60, 62, 63, 61]),
    domain: [45, 80],
    tickFormatter: (v) => `${v}°`,
    tooltipUnit: '°C',
  },
  healthScore: 89,
  healthStatus: 'Healthy',
  healthStatusColor: '#22C55E',
  summaryRows: [
    { label: 'Current Status', value: 'Healthy', valueColor: '#22C55E' },
    { label: 'Predicted Condition', value: 'Normal' },
    { label: 'Thermal Condition', value: 'Stable' },
    { label: 'Last Checked', value: '2 minutes ago', valueColor: '#94A3B8' },
  ],
  recommendations: [
    { text: 'Avoid sustained 100% GPU load for extended periods', done: true },
    { text: 'Monitor temperature during rendering or gaming sessions', done: true },
    { text: 'Verify GPU fan speeds are within expected range', done: false },
    { text: 'Ensure adequate case ventilation and airflow', done: false },
  ],
  infoNote: 'GPU temperature is within safe operating limits. Monitor closely during prolonged heavy rendering or gaming workloads.',
}

const ramConfig: ComponentDetailConfig = {
  pageTitle: 'RAM Overview',
  pageSubtitle: 'Detailed health, telemetry, and predictive analytics for system memory.',
  icon: <IconMemory size={16} />,
  statCards: [
    { label: 'Memory Used', value: '11.4', unit: 'GB', statusLabel: 'Moderate', statusColor: '#FACC15' },
    { label: 'RAM Usage', value: '71', unit: '%', statusLabel: 'Moderate Load', statusColor: '#FACC15' },
    { label: 'Health Score', value: '90', unit: '%', statusLabel: 'Healthy', statusColor: '#22C55E' },
  ],
  prediction: { value: 'Normal', risk: '10%', riskColor: '#22C55E', riskLabel: 'Low Risk' },
  chart: {
    title: 'RAM Usage Trend',
    legendLabel: 'RAM Usage',
    safeRange: '0–85%',
    lineColor: '#22C55E',
    gradientId: 'ramGrad',
    data: makeTrend([58, 60, 57, 62, 61, 64, 67, 70, 72, 74, 71, 69, 72, 75, 73, 70, 71, 73, 71, 68, 67, 69, 70, 68]),
    domain: [40, 90],
    tickFormatter: (v) => `${v}%`,
    tooltipUnit: '%',
  },
  healthScore: 90,
  healthStatus: 'Healthy',
  healthStatusColor: '#22C55E',
  summaryRows: [
    { label: 'Current Status', value: 'Healthy', valueColor: '#22C55E' },
    { label: 'Memory Used', value: '11.4 GB / 16 GB' },
    { label: 'Predicted Condition', value: 'Normal' },
    { label: 'Last Checked', value: '2 minutes ago', valueColor: '#94A3B8' },
  ],
  recommendations: [
    { text: 'Close unused browser tabs and background applications', done: true },
    { text: 'Avoid running multiple memory-intensive tasks simultaneously', done: true },
    { text: 'Monitor for potential memory leaks in running processes', done: false },
    { text: 'Consider upgrading to 32 GB if usage stays above 80%', done: false },
  ],
  infoNote: 'RAM usage is elevated but within manageable limits. Closing unused applications will free up headroom for critical processes.',
}

const storageConfig: ComponentDetailConfig = {
  pageTitle: 'Storage Overview',
  pageSubtitle: 'Detailed health, telemetry, and predictive analytics for storage devices.',
  icon: <IconStorage size={16} />,
  statCards: [
    { label: 'Capacity Used', value: '420', unit: 'GB', statusLabel: 'Normal', statusColor: '#22C55E' },
    { label: 'Drive Health', value: '97', unit: '%', statusLabel: 'Excellent', statusColor: '#22C55E' },
    { label: 'Read Speed', value: '540', unit: 'MB/s', statusLabel: 'Optimal', statusColor: '#22C55E' },
  ],
  prediction: { value: 'Excellent', risk: '4%', riskColor: '#22C55E', riskLabel: 'Very Low Risk' },
  chart: {
    title: 'Storage Usage Trend',
    legendLabel: 'Storage Usage',
    safeRange: '0–85%',
    lineColor: '#34D399',
    gradientId: 'storageGrad',
    data: makeTrend([40, 40, 41, 41, 41, 42, 42, 42, 42, 42, 43, 43, 43, 43, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42]),
    domain: [30, 65],
    tickFormatter: (v) => `${v}%`,
    tooltipUnit: '%',
  },
  healthScore: 97,
  healthStatus: 'Excellent',
  healthStatusColor: '#22C55E',
  summaryRows: [
    { label: 'Current Status', value: 'Excellent', valueColor: '#22C55E' },
    { label: 'Capacity Used', value: '420 GB / 1 TB' },
    { label: 'Predicted Condition', value: 'Normal' },
    { label: 'Last Checked', value: '2 minutes ago', valueColor: '#94A3B8' },
  ],
  recommendations: [
    { text: 'Regular backups are up to date', done: true },
    { text: 'Avoid filling storage beyond 85% capacity', done: true },
    { text: 'Run a monthly S.M.A.R.T. health scan', done: false },
    { text: 'Schedule a full integrity check every 6 months', done: false },
  ],
  infoNote: 'Storage health is excellent with ample free space. Maintain regular backups to protect against unexpected data loss.',
}

const coolingConfig: ComponentDetailConfig = {
  pageTitle: 'Cooling Overview',
  pageSubtitle: 'Detailed health, telemetry, and predictive analytics for the cooling system.',
  icon: <IconFan size={16} />,
  statCards: [
    { label: 'Fan Speed', value: '2200', unit: 'RPM', statusLabel: 'Normal', statusColor: '#22C55E' },
    { label: 'Cooling Efficiency', value: '84', unit: '%', statusLabel: 'Good', statusColor: '#22C55E' },
    { label: 'Health Score', value: '85', unit: '%', statusLabel: 'Stable', statusColor: '#22C55E' },
  ],
  prediction: { value: 'Stable', risk: '18%', riskColor: '#FACC15', riskLabel: 'Low Risk' },
  chart: {
    title: 'Fan Speed Trend',
    legendLabel: 'Fan Speed',
    safeRange: '800–3500 RPM',
    lineColor: '#38BDF8',
    gradientId: 'coolingGrad',
    data: makeTrend([1900, 1950, 1850, 1950, 1850, 1900, 2050, 2150, 2300, 2400, 2250, 2200, 2350, 2450, 2200, 2100, 2150, 2300, 2200, 2050, 2000, 2100, 2150, 2050]),
    domain: [1600, 2800],
    tickFormatter: (v) => `${v}`,
    tooltipUnit: ' RPM',
  },
  healthScore: 85,
  healthStatus: 'Stable',
  healthStatusColor: '#22C55E',
  summaryRows: [
    { label: 'Current Status', value: 'Stable', valueColor: '#22C55E' },
    { label: 'Fan Speed', value: '2200 RPM' },
    { label: 'Cooling Efficiency', value: '84%' },
    { label: 'Last Checked', value: '2 minutes ago', valueColor: '#94A3B8' },
  ],
  recommendations: [
    { text: 'Clean fan blades and heatsink fins every 3 months', done: true },
    { text: 'Verify all case fans are operational', done: true },
    { text: 'Replace thermal paste if CPU temps continue rising', done: false },
    { text: 'Check airflow direction for front-to-back cooling path', done: false },
  ],
  infoNote: 'Cooling system is stable. A slight drop in efficiency suggests dust buildup may be present — a clean-up is recommended.',
}

// ── Root App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [activeNav, setActiveNav] = useState<NavId>('dashboard')

  const headerMeta: Record<NavId, { title: string; sub: string; breadcrumb?: { label: string; navId: NavId }[] }> = {
    dashboard: {
      title: 'System Dashboard',
      sub: 'Real-time hardware monitoring & failure prediction',
    },
    components: {
      title: 'Hardware Components',
      sub: 'Select any component to view its health and predictive analytics',
    },
    'cpu-details': {
      title: 'CPU Overview',
      sub: cpuConfig.pageSubtitle,
      breadcrumb: [{ label: 'Components', navId: 'components' }, { label: 'CPU', navId: 'cpu-details' }],
    },
    'gpu-details': {
      title: 'GPU Overview',
      sub: gpuConfig.pageSubtitle,
      breadcrumb: [{ label: 'Components', navId: 'components' }, { label: 'GPU', navId: 'gpu-details' }],
    },
    'ram-details': {
      title: 'RAM Overview',
      sub: ramConfig.pageSubtitle,
      breadcrumb: [{ label: 'Components', navId: 'components' }, { label: 'RAM', navId: 'ram-details' }],
    },
    'storage-details': {
      title: 'Storage Overview',
      sub: storageConfig.pageSubtitle,
      breadcrumb: [{ label: 'Components', navId: 'components' }, { label: 'Storage', navId: 'storage-details' }],
    },
    'cooling-details': {
      title: 'Cooling Overview',
      sub: coolingConfig.pageSubtitle,
      breadcrumb: [{ label: 'Components', navId: 'components' }, { label: 'Cooling', navId: 'cooling-details' }],
    },
    reports: {
      title: 'Reports',
      sub: 'Generated reports and analytics for system performance and health',
    },
    settings: {
      title: 'Settings',
      sub: 'Configure monitoring preferences and alert thresholds',
    },
  }

  const meta = headerMeta[activeNav]

  const detailMap: Partial<Record<NavId, ComponentDetailConfig>> = {
    'cpu-details': cpuConfig,
    'gpu-details': gpuConfig,
    'ram-details': ramConfig,
    'storage-details': storageConfig,
    'cooling-details': coolingConfig,
  }

  return (
    <Shell
      activeNav={activeNav}
      onNav={setActiveNav}
      headerTitle={meta.title}
      headerSub={meta.sub}
      breadcrumb={meta.breadcrumb}
    >
      {activeNav === 'dashboard' && <DashboardPage />}
      {activeNav === 'components' && <ComponentsPage onNav={setActiveNav} />}
      {detailMap[activeNav] && <ComponentDetailPage cfg={detailMap[activeNav]!} />}
      {(activeNav === 'reports' || activeNav === 'settings') && (
        <div className="flex flex-col items-center justify-center h-64 gap-3">
          <div className="text-[#334155]">
            {activeNav === 'reports' ? <IconReports size={40} /> : <IconSettings size={40} />}
          </div>
          <p className="text-[#94A3B8] text-sm font-medium">
            {activeNav === 'reports' ? 'Reports view coming soon' : 'Settings view coming soon'}
          </p>
          <p className="text-[#475569] text-xs">This section is under development.</p>
        </div>
      )}
    </Shell>
  )
}
