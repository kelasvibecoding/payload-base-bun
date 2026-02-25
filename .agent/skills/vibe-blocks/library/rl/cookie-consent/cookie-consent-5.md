# Cookie Consent 5

## Metadata
- **Category**: Cookie Consent
- **Objective**: Sidebar Cookie Preferences
- **Use Case**: Slide-out privacy management.
- **Visual Style**: Sidebar Modal Layout.
- **Interactivity**: Switches, Sidebar Transition.

## Description
A specialized component for managing user cookie consent and privacy preferences, ensuring compliance with global regulations.

## Source Code
```tsx
"use client";

import { Button, Label, Switch, Dialog, DialogContent, DialogTrigger } from '@/components/ui';
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

export const Cookie5 = () => {
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
    <section className="relative flex h-screen items-center justify-center">
      <Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
        <AnimatePresence>
          {showPreferencesButton && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
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
 className="fixed inset-y-0 left-0 z-[998] h-full w-full max-w-md -translate-x-0 -translate-y-0 overflow-scroll bg-neutral-white p-8 transition-opacity data-[state=closed]:duration-200 data-[state=open]:duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 md:p-12"
>
          <form onSubmit={handleSubmit}>
            <h2 className="mb-6 text-2xl font-bold md:mb-8 md:text-3xl lg:text-4xl">
              Privacy Preferences
            </h2>
            <div className="h-px w-full bg-black" />
            <div className="grid grid-cols-1 items-center gap-8 py-8">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xl font-bold">Essential</Label>
                  <p className="font-semibold">Required</p>
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
                  These items are used to deliver advertising that is more relevant to you and your
                  interests
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
                  These items allow the website to remember choices you make (such as your user
                  name, language, or the region you are in) and provide enhanced, more personal
                  features.
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
                  These items help the website operator understand how its website performs, how
                  visitors interact with the site, and whether there may be technical issues.
                </p>
              </div>
              <div className="h-px w-full bg-black" />
              <div className="flex flex-col items-center gap-4 md:flex-row">
                <Button onClick={handleRejectAll} variant="secondary" className="w-full">
                  Reject all cookies
                </Button>
                <Button type="submit" className="w-full">
                  Save preferences
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
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
 className="absolute z-[998] flex w-[calc(100%-4rem)] max-w-md items-start justify-between gap-4 border border-border-primary bg-background-primary px-6 py-8 md:pl-8 md:pr-12"
>
          <div className="flex flex-col flex-wrap gap-9 md:gap-8 lg:flex-nowrap">
            <p className="pr-4">
              By clicking "Accept all cookies", you agree to the storing of cookies on your device
              to enhance site navigation, analyze site usage, and assist in our marketing efforts.
              View our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              for more information.
            </p>
            <div className="grid grid-cols-1 items-center justify-center gap-4">
              <div className="grid w-full grid-cols-1 gap-4">
                <Button onClick={onDecline}>Accept</Button>
                <Button onClick={onAccept} variant="secondary">
                  Decline
                </Button>
              </div>
              <Button onClick={onPreferences} className="w-full" variant="link" size="link">
                Preferences
              </Button>
            </div>
          </div>
          <Button variant="link" size="link" onClick={onClose} className="absolute right-2 top-2">
            <X className="size-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

