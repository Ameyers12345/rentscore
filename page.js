import { Navbar, Shell, Card } from '@/components/ui';

export default function SignupPage() {
  return (
    <Shell>
      <Navbar />
      <Card className="panel-pad" style={{ maxWidth: 760, margin: '0 auto' }}>
        <h1>Create your RentScore account</h1>
        <p className="small">MVP starter form for tenant and landlord sign-up. Wire this to Supabase Auth in production.</p>
        <form className="form-grid">
          <div>
            <label className="label">Role</label>
            <select className="select" defaultValue="tenant">
              <option value="tenant">Tenant</option>
              <option value="landlord">Landlord</option>
            </select>
          </div>
          <div className="two-col">
            <div>
              <label className="label">Full name</label>
              <input className="input" placeholder="Ava Rahman" />
            </div>
            <div>
              <label className="label">Email</label>
              <input className="input" type="email" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="label">Password</label>
            <input className="input" type="password" placeholder="••••••••" />
          </div>
          <button className="btn brand" type="button">Create account</button>
        </form>
      </Card>
    </Shell>
  );
}
