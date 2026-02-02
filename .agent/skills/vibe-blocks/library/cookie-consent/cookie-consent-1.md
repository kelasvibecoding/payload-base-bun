# Cookie Consent 1

## Metadata
- **Category**: Cookie Consent
- **Objective**: Full Featured Cookie Banner
- **Use Case**: Privacy compliance (GDPR/CCPA).
- **Visual Style**: Banner + Dialog Preferences.
- **Interactivity**: Switches, Modal.

## Description
A specialized component for managing user cookie consent and privacy preferences, ensuring compliance with global regulations.

## Source Code
```tsx
"use client";

import { Button, Switch, Label, Dialog, DialogContent, DialogTrigger } from '@/components/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BiCookie } from 'lucide-react';
import { X } from 'lucide-react';

type CookieConsent = {
  version: string;
  essential: true;
  marketing: boolean;
  personalization: boolean;
  analytics: boolean;
  timestamp: number;
};

type CookieBannerProps = {
  visible: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onPreferences: () => void;
  onClose: () => void;
};

const CONSENT_VERSION = "1.0";

const getDefaultConsent = (): CookieConsent => ({
  version: CONSENT_VERSION,
  essential: true,
  marketing: false,
  personalization: false,
  analytics: false,
  timestamp: Date.now(),
});

const validateConsent = (consent: unknown): consent is CookieConsent => {
  if (typeof consent !== "object" || consent === null) return false;

  const requiredKeys = [
    "version",
    "essential",
    "marketing",
    "personalization",
    "analytics",
    "timestamp",
  ];
  return (
    requiredKeys.every((key) => key in consent) &&
    typeof (consent as CookieConsent).version === "string" &&
    typeof (consent as CookieConsent).essential === "boolean" &&
    typeof (consent as CookieConsent).marketing === "boolean" &&
    typeof (consent as CookieConsent).personalization === "boolean" &&
    typeof (consent as CookieConsent).analytics === "boolean" &&
    typeof (consent as CookieConsent).timestamp === "number"
  );
};

export const Cookie1 = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [showPreferencesButton, setShowPreferencesButton] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(getDefaultConsent());
  const [hasConsentBeenSet, setHasConsentBeenSet] = useState(false);
  const [isBannerDismissed, setIsBannerDismissed] = useState(false);

  const applyCookieSettings = async (newConsent: CookieConsent): Promise<boolean> => {
    try {
      // Apply essential cookies (always enabled)
      // Add your essential cookies logic here

      // Apply optional cookies based on consent
      if (newConsent.marketing) {
        // Enable marketing cookies
        // Add your marketing cookies logic here
      }

      if (newConsent.analytics) {
        // Enable analytics cookies
        // Add your analytics cookies logic here
      }

      if (newConsent.personalization) {
        // Enable personalization cookies
        // Add your personalization cookies logic here
      }

      return true;
    } catch (error) {
      console.error("Error applying cookie settings:", error);
      return false;
    }
  };

  const handleConsentUpdate = async (newConsent: CookieConsent) => {
    const success = await applyCookieSettings(newConsent);
    if (success) {
      try {
        localStorage.setItem("cookieConsent", JSON.stringify(newConsent));
        setConsent(newConsent);
        setBannerVisible(false);
        setShowPreferencesButton(true);
        setHasConsentBeenSet(true);
      } catch (error) {
        console.error("Error saving cookie consent:", error);
      }
    } else {
      console.error("Failed to apply cookie settings");
    }
  };

  useEffect(() => {
    setDialogOpen(false);
    try {
      const savedConsent = localStorage.getItem("cookieConsent");
      if (savedConsent) {
        const parsed = JSON.parse(savedConsent);
        if (validateConsent(parsed)) {
          if (parsed.version !== CONSENT_VERSION) {
            setConsent(getDefaultConsent());
            setBannerVisible(true);
            setHasConsentBeenSet(false);
            return;
          }
          setConsent(parsed);
          setBannerVisible(false);
          setShowPreferencesButton(true);
          setHasConsentBeenSet(true);
        } else {
          throw new Error("Invalid consent structure");
        }
      } else {
        setConsent(getDefaultConsent());
        setBannerVisible(true);
      }
    } catch (error) {
      console.error("Error loading cookie consent:", error);
      localStorage.removeItem("cookieConsent");
      setConsent(getDefaultConsent());
      setBannerVisible(true);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newConsent = {
      ...consent,
      timestamp: Date.now(),
    };
    await handleConsentUpdate(newConsent);
    setDialogOpen(false);
  };

  const handleAcceptAll = async () => {
    const newConsent: CookieConsent = {
      ...getDefaultConsent(),
      marketing: true,
      personalization: true,
      analytics: true,
      timestamp: Date.now(),
    };
    await handleConsentUpdate(newConsent);
    setDialogOpen(false);
  };

  const handleRejectAll = async () => {
    const newConsent: CookieConsent = {
      ...getDefaultConsent(),
      timestamp: Date.now(),
    };
    await handleConsentUpdate(newConsent);
    setDialogOpen(false);
  };

  const handleDialogOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open && !hasConsentBeenSet) {
      setBannerVisible(!isBannerDismissed);
      setShowPreferencesButton(isBannerDismissed);
    }
  };

  const handlePreferences = () => {
    setBannerVisible(false);
    setDialogOpen(true);
  };

  const handleCloseBanner = () => {
    setBannerVisible(false);
    setIsBannerDismissed(true);
    setShowPreferencesButton(true);
  };

  return (
    <section>
      <div className="relative h-screen">
        <div className="container max-w-lg">
          <Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
            <AnimatePresence>
              {showPreferencesButton && (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
 className="fixed bottom-4 left-4 md:bottom-8 md:left-8"
>
                  <DialogTrigger asChild>
                    <Button variant="link" size="link" iconLeft={<BiCookie className="size-6" />}>
                      Cookie preferences
                    </Button>
                  </DialogTrigger>
                </motion.div>
              )}
            </AnimatePresence>
            <DialogContent
              closeIconPosition="inside"
              overlayClassName="bg-[#0009]"
 className="h-fit max-h-[70vh] w-[90%] max-w-lg overflow-scroll bg-neutral-white p-8 sm:w-[95%] md:p-10 lg:w-full lg:p-12"
>
              <form onSubmit={handleSubmit}>
                <div>
                  <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl lg:text-4xl">
                    Privacy Preferences
                  </h2>
                  <p>
                    When you visit websites, they may store or retrieve data in your browser. This
                    storage is often necessary for the basic functionality of the website. The
                    storage may be used for marketing, analytics, and personalization of the site,
                    such as storing your preferences. Privacy is important to us, so you have the
                    option of disabling certain types of storage that may not be necessary for the
                    basic functioning of the website. Blocking categories may impact your experience
                    on the website.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-start gap-4">
                    <Button variant="secondary" onClick={handleRejectAll}>
                      Reject all cookies
                    </Button>
                    <Button onClick={handleAcceptAll}>Accept all cookies</Button>
                  </div>
                  <div className="mt-12 h-px w-full bg-black" />
                </div>
                <div className="mt-12">
                  <div className="grid grid-cols-1 items-center gap-6">
                    <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                      Manage consent preferences by category
                    </h2>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-xl font-bold">Essential</Label>
                        <p className="font-semibold">Always active</p>
                      </div>
                      <p>These items are required to enable basic website functionality.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-xl font-bold">Marketing</Label>
                        <Switch
                          id="marketing-switch"
                          checked={consent.marketing}
                          onCheckedChange={(checked) =>
                            setConsent((prev) => ({ ...prev, marketing: checked }))
                          }
                        />
                      </div>
                      <p>
                        These items are used to deliver advertising that is more relevant to you and
                        your interests. They may also be used to limit the number of times you see
                        an advertisement and measure the effectiveness of advertising campaigns.
                        Advertising networks usually place them with the website operator’s
                        permission.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-xl font-bold">Personalization</Label>
                        <Switch
                          id="personalization-switch"
                          checked={consent.personalization}
                          onCheckedChange={(checked) =>
                            setConsent((prev) => ({ ...prev, personalization: checked }))
                          }
                        />
                      </div>
                      <p>
                        These items allow the website to remember choices you make (such as your
                        user name, language, or the region you are in) and provide enhanced, more
                        personal features. For example, a website may provide you with local weather
                        reports or traffic news by storing data about your current location.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-xl font-bold">Analytics</Label>
                        <Switch
                          id="analytics-switch"
                          checked={consent.analytics}
                          onCheckedChange={(checked) =>
                            setConsent((prev) => ({ ...prev, analytics: checked }))
                          }
                        />
                      </div>
                      <p>
                        These items help the website operator understand how its website performs,
                        how visitors interact with the site, and whether there may be technical
                        issues. This storage type usually doesn’t collect information that
                        identifies a visitor.
                      </p>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-end gap-4">
                      <Button onClick={() => setDialogOpen(false)} variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit">Save preferences</Button>
                    </div>
                  </div>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <CookieBanner
        visible={bannerVisible}
        onAccept={handleAcceptAll}
        onDecline={handleRejectAll}
        onPreferences={handlePreferences}
        onClose={handleCloseBanner}
      />
    </section>
  );
};

const CookieBanner = ({
  visible,
  onAccept,
  onDecline,
  onPreferences,
  onClose,
}: CookieBannerProps) => {
  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }}
 className="absolute bottom-8 right-8 z-[998] flex w-[calc(100%-4rem)] max-w-xl flex-col items-start justify-start gap-8 overflow-hidden rounded-none border border-border-primary bg-background-primary px-6 py-8 lg:flex-row lg:items-center lg:pl-12 lg:pr-8"
>
          <p>
            By clicking "Accept", you agree to the storing of cookies on your device to enhance site
            navigation, analyze site usage, and assist in our marketing efforts. View our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            for more information.
          </p>
          <div className="flex flex-none flex-wrap items-center gap-4 self-end lg:self-auto">
            <Button variant="link" size="link" onClick={onPreferences}>
              Preferences
            </Button>
            <Button variant="secondary" onClick={onDecline}>
              Decline
            </Button>
            <Button onClick={onAccept}>Accept</Button>
          </div>
          <Button
            variant="link"
            size="link"
            onClick={onClose}
 className="absolute right-2 top-2 lg:static"
>
            <X className="size-6 lg:size-8" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

