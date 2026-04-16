// ─────────────────────────────────────────────────────────────
// MeetingMind — Sample Report Preview Component
// Static mock of the report output for landing page
// ─────────────────────────────────────────────────────────────

const SampleReportPreview = () => {
  return (
    <div style={{ margin: '40px 0' }}>
      {/* Section Heading */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span
          style={{
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
          }}
        >
          SAMPLE OUTPUT
        </span>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '700',
            marginTop: '12px',
            color: 'var(--color-text-primary)',
          }}
        >
          What MeetingMind Produces From Your Meeting
        </h2>
      </div>

      {/* Preview Container with Fade */}
      <div
        style={{
          position: 'relative',
          border: '1px solid var(--color-border)',
          borderRadius: '16px',
          background: 'var(--color-bg-card)',
          padding: '28px',
        }}
      >
        {/* Block 1: Meeting Summary */}
        <div
          style={{
            borderLeft: `3px solid var(--color-accent-gold)`,
            paddingLeft: '20px',
            marginBottom: '32px',
          }}
        >
          <h3
            style={{
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '12px',
              color: 'var(--color-text-primary)',
            }}
          >
            Meeting Summary
          </h3>
          <p
            style={{
              fontSize: '14px',
              lineHeight: '1.7',
              color: 'var(--color-text-secondary)',
            }}
          >
            The team aligned on the Q3 product launch timeline, with engineering
            confirming the payment gateway integration as the only remaining
            blocker. Marketing has drafted announcement materials pending final
            feature sign-off. A decision was made to proceed with Friday launch
            contingent on Wednesday testing results, while parking the rollback
            discussion for next week's standup.
          </p>
        </div>

        {/* Block 2: Action Items Table */}
        <div style={{ marginBottom: '32px' }}>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '16px',
              color: 'var(--color-text-primary)',
            }}
          >
            Action Items
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '13px',
              }}
            >
              <thead>
                <tr style={{ background: 'var(--color-bg-card-hover)' }}>
                  {['Task', 'Owner', 'Deadline', 'Priority'].map(h => (
                    <th
                      key={h}
                      style={{
                        padding: '12px 16px',
                        textAlign: 'left',
                        fontWeight: '600',
                        color: 'var(--color-accent-gold)',
                        fontSize: '11px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    task: 'Test Stripe webhooks for payment gateway',
                    owner: 'Bob',
                    deadline: 'Wednesday',
                    priority: 'High',
                  },
                  {
                    task: 'Draft announcement email',
                    owner: 'Carol',
                    deadline: 'Thursday AM',
                    priority: 'Medium',
                  },
                  {
                    task: 'Schedule launch day monitoring',
                    owner: 'Alice',
                    deadline: 'Friday',
                    priority: 'Low',
                  },
                ].map((item, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: '1px solid var(--color-border)',
                      background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <td style={{ padding: '12px 16px', color: 'var(--color-text-primary)' }}>
                      {item.task}
                    </td>
                    <td style={{ padding: '12px 16px', color: 'var(--color-accent-cyan)' }}>
                      {item.owner}
                    </td>
                    <td style={{ padding: '12px 16px', color: 'var(--color-text-muted)' }}>
                      {item.deadline}
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <span
                        style={{
                          padding: '4px 10px',
                          borderRadius: '20px',
                          fontSize: '10px',
                          fontWeight: '700',
                          background:
                            item.priority === 'High'
                              ? 'rgba(245, 158, 11, 0.15)'
                              : item.priority === 'Medium'
                              ? 'rgba(14, 165, 233, 0.15)'
                              : 'rgba(148, 163, 184, 0.15)',
                          color:
                            item.priority === 'High'
                              ? '#f59e0b'
                              : item.priority === 'Medium'
                              ? '#0ea5e9'
                              : '#94a3b8',
                        }}
                      >
                        {item.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Block 3: Meeting Coach Score */}
        <div style={{ marginBottom: '32px' }}>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '16px',
              color: 'var(--color-text-primary)',
            }}
          >
            Meeting Coach
          </h3>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '12px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: '800',
                  color: 'var(--color-accent-gold)',
                }}
              >
                8.4
              </span>
              <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                /10
              </span>
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div
                style={{
                  height: '8px',
                  background: 'var(--color-border)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '84%',
                    height: '100%',
                    background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                    borderRadius: '4px',
                  }}
                />
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
              fontStyle: 'italic',
            }}
          >
            "Clear decisions and action items. Consider assigning owners more explicitly for each task."
          </p>
        </div>

        {/* Block 4: Risk Flags */}
        <div style={{ marginBottom: '24px' }}>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '12px',
              color: 'var(--color-text-primary)',
            }}
          >
            Risk Flags
          </h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <span
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#f59e0b',
              }}
            >
              ⚠️ Payment gateway testing incomplete
            </span>
            <span
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#fca5a5',
              }}
            >
              🔴 No rollback plan defined
            </span>
          </div>
        </div>

        {/* Fade Overlay */}
        <div
          className="report-preview-fade"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100px',
            background: 'linear-gradient(to bottom, transparent, var(--color-bg-primary))',
            pointerEvents: 'none',
            borderRadius: '0 0 16px 16px',
          }}
        />
      </div>

      {/* CTA Below Preview */}
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <button
          className="cta-button"
          style={{
            padding: '12px 32px',
            fontSize: '14px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
          }}
          onClick={() => document.getElementById('app-demo')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Register to Build This
        </button>
      </div>
    </div>
  );
};

export default SampleReportPreview;