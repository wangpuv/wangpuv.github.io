import { lifeCards } from '../data/life'
import { books } from '../data/books'
import { ui } from '../i18n/strings'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from '../components/Reveal'

export default function Life() {
  const { lang } = useLanguage()
  const t = ui[lang]

  return (
    <section className="section page-top life-page">
      <div className="wrap">
        <Reveal className="page-head">
          <p className="eyebrow">{t.life.eyebrow}</p>
          <h1 className="display page-title">{t.life.title}</h1>
          <p className="lead">{t.life.lead}</p>
        </Reveal>

        <div className="life-grid">
          {lifeCards.map((card, i) => {
            const c = card[lang]
            return (
              <Reveal key={card.key} delay={i * 70}>
                <article
                  className={`life-card life-card--${card.key}`}
                  style={{ '--card-accent': card.accent }}
                >
                  <p className="eyebrow life-card__label">{c.label}</p>
                  <h2 className="life-card__title display">{c.title}</h2>
                  <p className="life-card__body">{c.body}</p>

                  {card.photo && (
                    <figure className="life-photo">
                      <img src={card.photo} alt={c.photoAlt} />
                    </figure>
                  )}

                  {card.qr && (
                    <figure className="life-qr">
                      <img src={card.qr} alt={c.qrAlt} width="160" height="160" />
                      <figcaption className="meta">{c.qrCaption}</figcaption>
                    </figure>
                  )}

                  {card.link && (
                    <a className="link life-card__link" href={card.link} target="_blank" rel="noreferrer">
                      {c.linkText} <span className="arrow" aria-hidden="true">→</span>
                    </a>
                  )}
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="reading">
          <div className="reading__head">
            <p className="eyebrow">{t.life.reading.eyebrow}</p>
            <h2 className="display reading__title">{t.life.reading.title}</h2>
            <p className="reading__story">{t.life.reading.story}</p>
            <p className="meta reading__note">
              {t.life.reading.note.replace('{n}', books.length)}
            </p>
          </div>
          <ol className="book-grid">
            {books.map((b, i) => (
              <li className="book" key={i}>
                <div className="book__cover">
                  <img src={b.cover} alt={b.title} width="285" height="411" />
                </div>
                <p className="book__title">{b.title}</p>
                <p className="book__meta meta">{b.author} · {b.year}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
