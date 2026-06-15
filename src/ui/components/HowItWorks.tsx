import { useT } from '../../i18n';



export function HowItWorks({ onOpenAdmin: _onOpenAdmin }: { onOpenAdmin?: () => void }) {
  const { t } = useT();
  

  return (
    <div className="hiw-stack">

      <div className="hiw-stack-pane">
        <div className="hiw-article">
          <div className="hiw-hero">
            <p className="hiw-eyebrow">{t('hiw.creator.eyebrow')}</p>
            <h1 className="hiw-h1">{t('hiw.creator.h1')}</h1>
            <p className="hiw-deck"><em>{t('hiw.creator.intro')}</em> {t('hiw.creator.p1')}</p>
          </div>
          <div className="hiw-divider" />
          <div className="hiw-section">
            <p className="hiw-p">{t('hiw.creator.p2')}</p>
            <p className="hiw-p">{t('hiw.creator.p3')}</p>
            <p className="hiw-p">{t('hiw.creator.p4')}</p>
            <div className="hiw-creator-buttons">
              <a className="hiw-creator-btn hiw-creator-btn--linkedin" href="https://www.linkedin.com/in/suraj-jhx" target="_blank" rel="noopener noreferrer">{t('hiw.creator.linkedin')}</a>
              <a className="hiw-creator-btn hiw-creator-btn--email" href="mailto:suraj.jha@alumni.esade.edu">{t('hiw.creator.contact')}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hiw-stack-divider" />

      <div className="hiw-stack-pane">
        <div className="hiw-article">

          <div className="hiw-hero">
            <p className="hiw-eyebrow">{t('hiw.eyebrow')}</p>
            <h1 className="hiw-h1">{t('hiw.h1')}</h1>
            <p className="hiw-deck">{t('hiw.deck')}</p>
          </div>

          <div className="hiw-divider" />

          <div className="hiw-section">
            <p className="hiw-section-label">{t('hiw.story.label')}</p>
            <h2 className="hiw-h2">{t('hiw.story.h2')}</h2>
            <p className="hiw-p">{t('hiw.story.p1')}</p>
            <p className="hiw-p">{t('hiw.story.p2')}</p>
            <p className="hiw-p">{t('hiw.story.p3')}</p>
            <blockquote className="hiw-callout">{t('hiw.story.callout')}</blockquote>
          </div>

          <div className="hiw-divider" />

          <div className="hiw-section">
            <p className="hiw-section-label">{t('hiw.what.label')}</p>
            <h2 className="hiw-h2">{t('hiw.what.h2')}</h2>
            <p className="hiw-p">{t('hiw.what.intro')}</p>
            <div className="hiw-indicators">
              <div className="hiw-indicator">
                <div className="hiw-ind-head"><span className="hiw-ind-dot" style={{background:'var(--green)'}} /><strong>{t('hiw.what.realistic.title')}</strong></div>
                <p>{t('hiw.what.realistic.body')}</p>
              </div>
              <div className="hiw-indicator">
                <div className="hiw-ind-head"><span className="hiw-ind-dot" style={{background:'var(--italy)'}} /><strong>{t('hiw.what.italy.title')}</strong></div>
                <p>{t('hiw.what.italy.body')}</p>
              </div>
              <div className="hiw-indicator">
                <div className="hiw-ind-head"><span className="hiw-ind-dot" style={{background:'var(--amber)'}} /><strong>{t('hiw.what.whatif.title')}</strong></div>
                <p>{t('hiw.what.whatif.body')}</p>
              </div>
              <div className="hiw-indicator">
                <div className="hiw-ind-head"><span className="hiw-ind-dot" style={{background:'var(--cyan)'}} /><strong>{t('hiw.what.compare.title')}</strong></div>
                <p>{t('hiw.what.compare.body')}</p>
              </div>
            </div>
          </div>

          <div className="hiw-divider" />

          <div className="hiw-section">
            <p className="hiw-section-label">03</p>
            <h2 className="hiw-h2">{t('hiw.s1.h2')}</h2>
            <p className="hiw-p">{t('hiw.s1.p1')}</p>
            <p className="hiw-p">{t('hiw.s1.p2')}</p>
            <blockquote className="hiw-callout">{t('hiw.s1.callout')}</blockquote>
            <p className="hiw-p">{t('hiw.s1.p3')}</p>
          </div>

          <div className="hiw-divider" />

          <div className="hiw-section">
            <p className="hiw-section-label">04</p>
            <h2 className="hiw-h2">{t('hiw.s2.h2')}</h2>
            <p className="hiw-p">{t('hiw.s2.p1')}</p>
            <div className="hiw-indicators">
              <div className="hiw-indicator">
                <div className="hiw-ind-head"><span className="hiw-ind-dot" style={{background:'#4a9eff'}} /><strong>{t('hiw.ind.elo.title')}</strong></div>
                <p>{t('hiw.ind.elo.body')}</p>
                <div className="hiw-source"><span className="hiw-source-tag">{t('hiw.source')}</span><span className="hiw-source-text">{t('hiw.ind.elo.source')}</span></div>
              </div>
              <div className="hiw-indicator">
                <div className="hiw-ind-head"><span className="hiw-ind-dot" style={{background:'var(--green)'}} /><strong>{t('hiw.ind.atkdef.title')}</strong></div>
                <p>{t('hiw.ind.atkdef.body')}</p>
                <div className="hiw-source"><span className="hiw-source-tag">{t('hiw.source')}</span><span className="hiw-source-text">{t('hiw.ind.atkdef.source')}</span></div>
              </div>
              <div className="hiw-indicator">
                <div className="hiw-ind-head"><span className="hiw-ind-dot" style={{background:'var(--amber)'}} /><strong>{t('hiw.ind.form.title')}</strong></div>
                <p>{t('hiw.ind.form.body')}</p>
                <div className="hiw-source"><span className="hiw-source-tag">{t('hiw.source')}</span><span className="hiw-source-text">{t('hiw.ind.form.source')}</span></div>
              </div>
              <div className="hiw-indicator">
                <div className="hiw-ind-head"><span className="hiw-ind-dot" style={{background:'#a78bfa'}} /><strong>{t('hiw.ind.ko.title')}</strong></div>
                <p>{t('hiw.ind.ko.body')}</p>
                <div className="hiw-source"><span className="hiw-source-tag">{t('hiw.source')}</span><span className="hiw-source-text">{t('hiw.ind.ko.source')}</span></div>
              </div>
              <div className="hiw-indicator">
                <div className="hiw-ind-head"><span className="hiw-ind-dot" style={{background:'var(--amber)'}} /><strong>{t('hiw.ind.value.title')}</strong></div>
                <p>{t('hiw.ind.value.body')}</p>
                <div className="hiw-source"><span className="hiw-source-tag">{t('hiw.source')}</span><span className="hiw-source-text">{t('hiw.ind.value.source')}</span></div>
                <div className="hiw-postilla"><strong>Note · Italy:</strong> {t('hiw.ind.value.note')}</div>
              </div>
              <div className="hiw-indicator">
                <div className="hiw-ind-head"><span className="hiw-ind-dot" style={{background:'var(--cyan)'}} /><strong>{t('hiw.ind.h2h.title')}</strong></div>
                <p>{t('hiw.ind.h2h.body')}</p>
                <div className="hiw-source"><span className="hiw-source-tag">{t('hiw.source')}</span><span className="hiw-source-text">{t('hiw.ind.h2h.source')}</span></div>
              </div>
            </div>
           
          </div>

          <div className="hiw-divider" />

          <div className="hiw-section">
            <p className="hiw-section-label">05</p>
            <h2 className="hiw-h2">{t('hiw.s3.h2')}</h2>
            <p className="hiw-p">{t('hiw.s3.p1')}</p>
            <p className="hiw-p">{t('hiw.s3.p2')}</p>
            <blockquote className="hiw-callout hiw-callout--amber">{t('hiw.s3.callout')}</blockquote>
          </div>

          <div className="hiw-divider" />

          <div className="hiw-section">
            <p className="hiw-section-label">06</p>
            <h2 className="hiw-h2">{t('hiw.s4.h2')}</h2>
            <p className="hiw-p">{t('hiw.s4.p1')}</p>
            <p className="hiw-p">{t('hiw.s4.p2')}</p>
            <p className="hiw-p">{t('hiw.s4.p3.pre')}<a className="hiw-contact-link" href="mailto:suraj@example.com">{t('hiw.s4.p3.link')}</a>{t('hiw.s4.p3.post')}</p>
            <p className="hiw-p">{t('hiw.s4.p4')}</p>
            <blockquote className="hiw-callout hiw-callout--muted">{t('hiw.s4.callout')}</blockquote>
          </div>

          <div className="hiw-divider" />

          <div className="hiw-section">
            <p className="hiw-section-label">{t('hiw.disclaimer.label')}</p>
            <h2 className="hiw-h2">{t('hiw.disclaimer.h2')}</h2>
            <p className="hiw-p">{t('hiw.disclaimer.p1')}</p>
            <p className="hiw-p">{t('hiw.disclaimer.p2')}</p>
            <p className="hiw-p">{t('hiw.disclaimer.p3')}</p>
          </div>

          <div className="hiw-divider" />

          <div className="hiw-section">
            <p className="hiw-section-label">{t('hiw.privacy.label')}</p>
            <h2 className="hiw-h2">{t('hiw.privacy.h2')}</h2>
            <p className="hiw-p">{t('hiw.privacy.p1')}</p>
          </div>

        </div>
      </div>

    </div>
  );
}