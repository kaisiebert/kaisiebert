import useSeo from "@/hooks/use-seo";

const Datenschutz = () => {
  useSeo({
    title: "Datenschutzerklärung",
    description: "Datenschutzerklärung von Kai Siebert – Psychologische Beratung & Coaching in Nürnberg.",
    canonical: "https://still-presence-space.lovable.app/datenschutz",
  });

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container-narrow">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12">
          Datenschutzerklärung
        </h1>

        <div className="space-y-10 text-text-body font-light leading-relaxed text-justify-clean">
          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-medium text-foreground mb-2">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <h3 className="font-medium text-foreground mb-2">Datenerfassung auf dieser Website</h3>
            <p className="mb-2">
              <strong className="text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            </p>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="mb-2">
              <strong className="text-foreground">Wie erfassen wir Ihre Daten?</strong>
            </p>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie per E-Mail an uns senden. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
            <p className="mb-2">
              <strong className="text-foreground">Wofür nutzen wir Ihre Daten?</strong>
            </p>
            <p className="mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p className="mb-2">
              <strong className="text-foreground">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
            </p>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              2. Verantwortliche Stelle
            </h2>
            <p className="mb-4">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="space-y-1 mb-4">
              <p>Kai Siebert</p>
              <p>c/o IP-Management #6765</p>
              <p>Ludwig-Erhard-Straße 18</p>
              <p>20459 Hamburg</p>
            </div>
            <div className="space-y-1">
              <p>Telefon: 09181-5436701</p>
              <p>E-Mail: info@kaisiebert.de</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              3. Hosting
            </h2>
            <p className="mb-4">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="mb-4">
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Mit dem Hoster wurde ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO) geschlossen, der die datenschutzkonforme Verarbeitung sicherstellt.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              4. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="font-medium text-foreground mb-2">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>

            <h3 className="font-medium text-foreground mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
            <p className="mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
            </p>

            <h3 className="font-medium text-foreground mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist im Impressum angegeben. Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
            <h3 className="font-medium text-foreground mb-2">Speicherdauer</h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
            </p>
            <h3 className="font-medium text-foreground mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="font-medium text-foreground mb-2">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
            <p className="mb-4">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen. Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen.
            </p>

            <h3 className="font-medium text-foreground mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>
            <p>
              Die zuständige Aufsichtsbehörde ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, Telefon: +49 (0) 981 180093-0, E-Mail: poststelle@lda.bayern.de, Website:{" "}
              <a
                href="https://www.lda.bayern.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.lda.bayern.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              5. Cookies
            </h2>
            <p>
              Diese Website verwendet keine Cookies, die einer Einwilligung bedürfen. Es werden lediglich technisch notwendige Cookies eingesetzt, die für den Betrieb der Website erforderlich sind. Diese werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung technisch notwendiger Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              6. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-medium text-foreground mb-2">Server-Log-Dateien</h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
            </p>
            <h3 className="font-medium text-foreground mb-2">Kontaktaufnahme per E-Mail</h3>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              7. Besondere Hinweise für Beratungs- und Coaching-Leistungen
            </h2>
            <h3 className="font-medium text-foreground mb-2">Schweigepflicht</h3>
            <p className="mb-4">
              Als Heilpraktiker für Psychotherapie unterliege ich der gesetzlichen Schweigepflicht gemäß § 203 StGB. Alle Informationen, die mir im Rahmen der Beratung oder Therapie anvertraut werden, werden streng vertraulich behandelt. Eine Weitergabe an Dritte erfolgt nur mit Ihrer ausdrücklichen Einwilligung oder wenn eine gesetzliche Pflicht zur Offenbarung besteht.
            </p>
            <h3 className="font-medium text-foreground mb-2">Erhobene Daten</h3>
            <p className="mb-4">
              Im Rahmen meiner Tätigkeit als psychologischer Berater und Coach werden personenbezogene Daten erhoben und verarbeitet. Dies umfasst insbesondere:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Kontaktdaten (Name, Adresse, Telefonnummer, E-Mail)</li>
              <li>Terminvereinbarungen und -dokumentation</li>
              <li>Gesprächsnotizen und Beratungsdokumentation</li>
              <li>Gegebenenfalls gesundheitsbezogene Angaben</li>
            </ul>

            <h3 className="font-medium text-foreground mb-2">Besondere Kategorien personenbezogener Daten</h3>
            <p className="mb-4">
              Im Rahmen der Beratung und Therapie können besondere Kategorien personenbezogener Daten im Sinne von Art. 9 Abs. 1 DSGVO verarbeitet werden, insbesondere Gesundheitsdaten. Die Verarbeitung dieser Daten erfolgt ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung (Art. 9 Abs. 2 lit. a DSGVO) oder soweit die Verarbeitung für Zwecke der Gesundheitsvorsorge oder der Behandlung im Gesundheitsbereich erforderlich ist (Art. 9 Abs. 2 lit. h DSGVO).
            </p>

            <h3 className="font-medium text-foreground mb-2">Rechtsgrundlage und Speicherdauer</h3>
            <p className="mb-4">
              Die Verarbeitung der im Rahmen der Beratung erhobenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Beratungs- und Coaching-Unterlagen werden für die Dauer der Zusammenarbeit und darüber hinaus für einen Zeitraum von 10 Jahren aufbewahrt, sofern keine kürzeren Aufbewahrungsfristen vereinbart wurden. Für Heilpraktiker-Leistungen gilt eine Aufbewahrungspflicht von 10 Jahren gemäß § 630f Abs. 3 BGB.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              8. Ihre Rechte
            </h2>
            <p className="mb-4">Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte verantwortliche Stelle.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">
              9. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026. Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50">
          <a
            href="/"
            className="text-primary hover:underline text-sm font-light"
          >
            ← Zurück zur Startseite
          </a>
        </div>
      </div>
    </main>
  );
};

export default Datenschutz;