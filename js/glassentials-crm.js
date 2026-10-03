/* ============================================
   GLASSENTIALS CRM — PAGE JAVASCRIPT
   ============================================ */

(function () {
  'use strict';

  /* ---- Scroll Reveal (reuse global pattern) ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---- Business Flow — Progressive Node Animation ---- */
  const flowSection = document.getElementById('crmFlowTrack');
  if (flowSection) {
    const nodes = flowSection.querySelectorAll('.crm-flow-node');
    const connectors = flowSection.querySelectorAll('.crm-flow-node-connector');

    const flowObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        activateFlowNodes(nodes, connectors);
        flowObserver.disconnect();
      }
    }, { threshold: 0.3 });

    flowObserver.observe(flowSection);
  }

  function activateFlowNodes(nodes, connectors) {
    nodes.forEach((node, i) => {
      setTimeout(() => {
        node.classList.add('is-active');
        if (connectors[i]) connectors[i].classList.add('active');
      }, i * 200);
    });
  }

  /* ---- Timeline Item Hover ---- */
  const timelineItems = document.querySelectorAll('.crm-timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.opacity = '1';
    });
  });

  /* ---- Architecture Module Entrance ---- */
  const archModules = document.querySelectorAll('.crm-arch-module');
  const archObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        archModules.forEach((mod, i) => {
          setTimeout(() => {
            mod.style.opacity = '1';
            mod.style.transform = 'translateY(0)';
          }, i * 60);
        });
        archObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });

  if (archModules.length) {
    archModules.forEach(mod => {
      mod.style.opacity = '0';
      mod.style.transform = 'translateY(10px)';
      mod.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
    archObserver.observe(archModules[0].closest('.crm-arch-section'));
  }

  /* ---- For-card stagger ---- */
  const forCards = document.querySelectorAll('.crm-for-card');
  const forObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        forCards.forEach((card, i) => {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, i * 80);
        });
        forObserver.disconnect();
      }
    });
  }, { threshold: 0.1 });

  if (forCards.length) {
    forCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(16px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    forObserver.observe(forCards[0].closest('.crm-for-section'));
  }

  /* ---- Quote doc entrance ---- */
  const quoteDoc = document.querySelector('.crm-quote-doc');
  if (quoteDoc) {
    const qObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        quoteDoc.style.opacity = '1';
        quoteDoc.style.transform = 'translateY(0) rotate(-1deg)';
        setTimeout(() => {
          quoteDoc.style.transform = 'translateY(0) rotate(0deg)';
        }, 400);
        qObserver.disconnect();
      }
    }, { threshold: 0.2 });

    quoteDoc.style.opacity = '0';
    quoteDoc.style.transform = 'translateY(24px)';
    quoteDoc.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    qObserver.observe(quoteDoc);
  }

  /* ---- Typing effect for Chat UI ---- */
  const chatBody = document.querySelector('.crm-chat-body');
  if (chatBody) {
    const chatObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateChatMessages();
        chatObserver.disconnect();
      }
    }, { threshold: 0.3 });
    chatObserver.observe(chatBody);
  }

  function animateChatMessages() {
    const msgs = document.querySelectorAll('.crm-chat-msg');
    msgs.forEach((msg, i) => {
      msg.style.opacity = '0';
      msg.style.transform = 'translateY(12px)';
      msg.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      setTimeout(() => {
        msg.style.opacity = '1';
        msg.style.transform = 'translateY(0)';
      }, i * 350);
    });
  }

  /* ---- Dark section subtle parallax on scroll ---- */
  const darkSection = document.querySelector('.crm-dark-section');
  if (darkSection && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const rect = darkSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const progress = 1 - rect.top / window.innerHeight;
        darkSection.style.backgroundPosition = `center ${progress * 20}px`;
      }
    }, { passive: true });
  }

  /* ---- Scattered tools stagger on load ---- */
  const toolItems = document.querySelectorAll('.crm-tool-item');
  const toolObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      toolItems.forEach((item, i) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, i * 100);
      });
      toolObserver.disconnect();
    }
  }, { threshold: 0.2 });

  if (toolItems.length) {
    toolItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(20px)';
      item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
    toolObserver.observe(toolItems[0].closest('.crm-scattered-tools'));
  }

})();
