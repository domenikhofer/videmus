import {Component, Input, OnChanges, OnInit, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-coaching-form',
  templateUrl: './coaching-form.component.html',
  styleUrls: ['./coaching-form.component.css']
})
export class CoachingFormComponent implements OnInit {
  @ViewChildren('group') group;
  scores = [];
  formfields = [
    {
      topic: 'Begrüssung',
      criteria: [
        {
          title: 'Erscheinungsbild',
          subtitle: 'Gepflegt '
        },
        {
          title: 'Haltung',
          subtitle: 'Gerade und offen'
        },
        {
          title: 'Mimik und Gestik',
          subtitle: 'Positive Ausstrahlung'
        },
        {
          title: 'Kundenansprache',
          subtitle: 'Individuell und emotional'
        },
        {
          title: 'Stimme',
          subtitle: 'Authentisch und begeisternd'
        },
        {
          title: 'Gesprächseinstieg',
          subtitle: 'Originell und positiv'
        }
      ]
    },
    {
      topic: 'Analyse',
      criteria: [
        {
          title: 'Hört zu',
          subtitle: 'Aufmerksam und aktiv'
        },
        {
          title: 'Stellt Verständnisfragen',
          subtitle: 'Erkennt Wünsche und Ängste'
        },
        {
          title: 'Bedarfsklärung',
          subtitle: 'Fragt nach Merkmalen und Besonderheiten '
        },
        {
          title: 'Atmosphäre',
          subtitle: 'Spricht Komplimente und Wertschätzung aus'
        },
        {
          title: 'Erkennt Bedürfnisse',
          subtitle: 'Fasst gehörtes zusammen und stellt vertiefte Fragen'
        },
        {
          title: 'Erscheint als Experte',
          subtitle: 'vertrauenswürdiger Gesprächsbegleiter'
        }
      ]
    },
    {
      topic: 'Beratung',
      criteria: [
        {
          title: 'Produkte Präsentation',
          subtitle: 'Stimmungsvoll und inspirierend'
        },
        {
          title: 'Nutzenargumentation',
          subtitle: 'Verbindet Kundenbedürfnisse mit Nutzenargumentationen'
        },
        {
          title: 'Up / Cross selling',
          subtitle: 'Zeigt Dienstleistungen und Zusatzprodukte auf'
        },
        {
          title: '360° Sicht',
          subtitle: 'Bezieht das Umfeld des Kunden ein'
        },
        {
          title: 'Fachkompetenz',
          subtitle: 'Tritt als Experte auf'
        },
        {
          title: 'Produkt Empfehlung',
          subtitle: 'Formuliert eine klare Empfehlung'
        }
      ]
    },
    {
      topic: 'EVAA',
      criteria: [
        {
          title: 'Erkennt den Einwand ',
          subtitle: 'Unterscheidet Einwand von Vorwand'
        },
        {
          title: 'Körpersprache',
          subtitle: 'Respektiert und würdigt den Einwand mit Empathie'
        },
        {
          title: 'Verständnis',
          subtitle: 'Formuliert Verständnis vor der Argumenation'
        },
        {
          title: 'Argumentation',
          subtitle: 'Entkräftigt durch passende Argumentation'
        },
        {
          title: 'Abschluss',
          subtitle: 'Der Abschluss des Einwands wird proaktiv gesucht'
        },
        {
          title: 'Einwandverhinderung',
          subtitle: 'Hat eine Technik zur Verhinderung von Einwänden'
        }
      ]
    },
    {
      topic: 'Reklamationsbehandlung',
      criteria: [
        {
          title: 'Verhalten',
          subtitle: 'Bleibt emphatisch und sachlich'
        },
        {
          title: 'Nachhaltigkeit ',
          subtitle: 'Übernimmt Verantwortung'
        },
        {
          title: 'Geduld',
          subtitle: 'Vermeidet Rechtfertigungen und Behauptungen'
        },
        {
          title: 'Argumentation',
          subtitle: 'Erarbeitet Lösungen zum Kundenanliegen'
        },
        {
          title: 'Verkaufschance',
          subtitle: 'Nutzt und erkennt Verkaufschancen'
        },
        {
          title: 'Atmosphäre',
          subtitle: 'Schafft angenehme und entspannte Atmosphäre'
        }
      ]
    },
    {
      topic: 'Abschluss',
      criteria: [
        {
          title: 'Zusammenfassung',
          subtitle: 'Fasst bisheriges zusammen'
        },
        {
          title: 'Mehrfachkontakte',
          subtitle: 'Vermeidet Mehrfachkontakte'
        },
        {
          title: 'Kaufentscheid',
          subtitle: 'Bestärkend'
        },
        {
          title: 'Swisscom Vorteile',
          subtitle: 'Macht Kunde auf Vorteile aufmerksam'
        },
        {
          title: 'Unterhalten',
          subtitle: 'Ruhige Minuten werden vom Berater genutzt'
        },
        {
          title: 'Nächste Schritte',
          subtitle: 'Informiert'
        }
      ]
    }
    ,
    {
      topic: 'Verabschiedung',
      criteria: [
        {
          title: 'Verabschiedung',
          subtitle: 'Kreativ, dynamisch und persönlich'
        },
        {
          title: 'Mimik und Gestik ',
          subtitle: 'Positive Ausstrahlung'
        },
        {
          title: 'Feedback',
          subtitle: 'Holt aktiv Feedback ein'
        },
        {
          title: 'Beratungsort',
          subtitle: 'Hinterlässt den Beratungsort ordentlich'
        },
        {
          title: 'Blickkontakt',
          subtitle: 'Nimmt Blickkontakt mit warteten Kunden auf'
        },
        {
          title: 'Bereitschaft',
          subtitle: 'Signalisiert Bereitschaft für die nächste Beratung'
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  showUpdates() {
    this.scores = [];
    this.group._results.forEach((element) => {
      if (this.scores.filter(el => el.id === element._name).length === 0) {
        const newObject = {id: element._name, result: []};
        this.scores.push(newObject);
      }
      const scoresIndex = this.scores.findIndex(x => x.id === element._name);
      this.scores[scoresIndex].result.push(element._value);
    });
    console.log(this.scores);


  }
}
